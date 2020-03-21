import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import {auth} from '../firebase.js';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import bronze from '../images/bronze.jpg';
import silver from '../images/silver.jpg';
import gold from '../images/gold.jpg';



class Checkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            bronzePlan : false,
            silverPlan : false,
            goldPlan : false,
            buttonClicked: false
        };

        this.onToken = this.onToken.bind(this);
        this.toggleBronze = this.toggleBronze.bind(this);
        this.toggleSilver = this.toggleSilver.bind(this);
        this.toggleGold = this.toggleGold.bind(this);
        this.signedInUser = this.signedInUser.bind(this);
    }

    toggleBronze(){
        this.setState({
            bronzePlan: true,
            silverPlan: false,
            goldPlan: false,
            buttonClicked: true
        });
        console.log("Bronze Button was clicked");
    }
    
    toggleSilver(){
        this.setState({
            silverPlan: true,
            bronzePlan: false,
            goldPlan: false,
            buttonClicked: true
        });
        console.log("Silver Button was clicked");
    }

    toggleGold(){
        this.setState({
            goldPlan: true,
            bronzePlan: false,
            silverPlan: false,
            buttonClicked: true
        });
        console.log("Gold Button was clicked");
    }

    signedInUser(){
        let user = auth.currentUser;
        if(user != null){
            console.log("User is signed in with: ", user);   
        }
        else{
            console.log("User is not signed in")
        }
    }

    async onToken(token) {
        console.log('onToken', token);
        this.signedInUser();

        const plan = () => {
            if (this.state.bronzePlan){
                return "bronze";
            }
            else if (this.state.silverPlan){
                return "silver";
            }
            else if (this.state.goldPlan){
                return "gold";
            }
        };

        const url = "https://us-central1-auto-purchaser.cloudfunctions.net/planSubscribe";

        let response = await fetch(url, {
            method: "POST", 
            headers: {"Content-Type": "text/plain"},
            body: JSON.stringify({uid: auth.currentUser.uid, token : token.id, subscription : plan()})
        });
        if (response.ok){
            var body = await response.json(); 
            console.log(body)
        }
    }

    

    render(){

        const useStyles = makeStyles(theme => ({
            '@global': {
              ul: {
                margin: 0,
                padding: 0,
                listStyle: 'none',
              },
            },
            appBar: {
              borderBottom: `1px solid ${theme.palette.divider}`,
            },
            media: {
                height: 0,
                paddingTop: '56.25%', // 16:9
              },
            toolbar: {
              flexWrap: 'wrap',
            },
            toolbarTitle: {
              flexGrow: 1,
            },
            heroContent: {
              padding: theme.spacing(8, 0, 6),
            },
            cardHeader: {
              backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
            },
            cardPricing: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              marginBottom: theme.spacing(2),
            }
          }));

          const tiers = [
            {
              title: 'Bronze',
              price: '0',
              description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
              buttonText: 'Sign up for bronze',
              buttonVariant: 'contained',
            },
            {
              title: 'Silver',
              subheader: 'Most popular',
              price: '15',
              description: [
                '20 users included',
                '10 GB of storage',
                'Help center access',
                'Priority email support',
              ],
              buttonText: 'Sign up for silver',
              buttonVariant: 'contained',
            },
            {
              title: 'Gold',
              price: '30',
              description: [
                '50 users included',
                '30 GB of storage',
                'Help center access',
                'Phone & email support',
              ],
              buttonText: 'Sign up for gold',
              buttonVariant: 'contained',
            },
          ]

          const tierSelect = (title) => {
              if(title === "Bronze"){
                  return this.toggleBronze;
              }
              else if (title === "Silver"){
                  return this.toggleSilver
              }
              else if (title === "Gold"){
                  return this.toggleGold
              }
          }

          const activeButton = (title) => {
              if (title === "Bronze" && this.state.bronzePlan === true) {
                  return "primary";
              }
              else if (title === "Silver" && this.state.silverPlan === true) {
                  return "primary";
              }
              else if (title === "Gold" && this.state.goldPlan === true) {
                  return "primary";
              }
          }

          const choosePic = (title) => {
              if (title === "Bronze"){
                  return bronze;
              }
              if (title === "Silver"){
                  return silver;
              }
              if (title === "Gold"){
                  return gold;
              }
          }
          
        const Pricing = (props) => {
            const classes = useStyles();
          
            return (
              <React.Fragment>
                <CssBaseline />
                {/* Hero unit */}
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Pricing
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Enjoying Jym's services and want to continue utilizing all that it has to offer? 
                    Then perhaps you should consider signing up for a Jym monthly membership! Choose from our three plans below.
                  </Typography>
                </Container>
                {/* End hero unit */}
                <Container maxWidth="md" component="main">
                  <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map(tier => (
                      // Enterprise card is full width at sm breakpoint
                      <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                        <Card>
                          <CardHeader
                            title={tier.title}
                            subheader={tier.subheader}
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{ align: 'center' }}
                            className={classes.cardHeader}
                          />
                          <CardMedia
                            className={classes.media}
                            image={choosePic(tier.title)}
                            title="Price Plan"
                        />
                          <CardContent>
                            <div className={classes.cardPricing}>
                              <Typography component="h2" variant="h3" color="textPrimary">
                                ${tier.price}
                              </Typography>
                              <Typography variant="h6" color="textSecondary">
                                /mo
                              </Typography>
                            </div>
                            <ul>
                              {tier.description.map(line => (
                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                  {line}
                                </Typography>
                              ))}
                            </ul>
                          </CardContent>
                          <CardActions>
                            <Button fullWidth variant={tier.buttonVariant} color={activeButton(tier.title)} onClick={tierSelect(tier.title)}>
                              {tier.buttonText}
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </React.Fragment>
            );
          }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Checkout</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Checkout</h3>
                    <p>Please select a membership plan</p>
                    <hr />
                </div>                
            </div>
            <div className = "d-flex justify-content-center">
                <div className="row align-items-center">
                <Pricing />
                </div> 
            </div>     
            <div style={{marginTop: "30px", marginLeft:"100px", marginBottom: "50px"}}>
                <StripeCheckout
                        token={this.onToken}
                        stripeKey="pk_test_riF4lNBnYKk2Caz9oJPJDEkg00vHb7arwy"/>
            </div>  
        </div>
    );
    }
}


export default Checkout;