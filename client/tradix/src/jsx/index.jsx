import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Price from './pages/price';
import Wallet from './pages/wallet';
import Blog from './pages/blog';
import BlogSingle from './pages/blog-single';
import Career from './pages/career';
import Contact from './pages/contact';
import HelpDesk from './pages/helpdesk';
import Preferences from './pages/settings-preferences';
import SettingsSecurity from './pages/settings-security';
import SettingsAccount from './pages/settings-account';
import AddBankAccount from './pages/add-bank-acc';
import AddDebitCard from './pages/add-debit-card';
import Locked from './pages/lock';
import Otp1 from './pages/otp-1';
import Otp2 from './pages/otp-2';
import PrivacyPolicy from './pages/privacy-policy';
import TermsCondition from './pages/terms-condition';
import VerifyStep1 from './pages/verify-step-1';
import VerifyStep2 from './pages/verify-step-2';
import VerifyStep3 from './pages/verify-step-3';
import VerifyStep4 from './pages/verify-step-4';
import VerifyStep5 from './pages/verify-step-5';
import VerifyStep6 from './pages/verify-step-6';
import History from './pages/history';
import Demo from './pages/demo';
import { Sugar } from 'react-preloaders';
// 
import About from './pages/about'
import Signin from './pages/signin'
import Signup from './pages/signup'
import AdminDashboard from './pages/admin-dashboard'
import WithdrawRequests from './pages/withdraw-requests'
import SingleRoute from './pages/single-route'
import Dashboard from './pages/dashboard'
import BuySell from './pages/buy-sell'
import Accounts from './pages/accounts'
import Settings from './pages/settings'
import Team from './pages/team'
import Invoice from './pages/invoice'
// Core imports below
const Homepage = React.lazy(() => import('./pages/index'))
const Homepage2 = React.lazy(()=> import('./pages/index2'));

// const About = React.lazy(() => import("./pages/about"));
const Faq = React.lazy(() => import("./pages/faq"));
// const Signin = React.lazy(() => import('./pages/signin'));
// const Signup = React.lazy(() => import('./pages/signup'));
// const AdminDashboard = React.lazy(() => import('./pages/admin-dashboard'));
// const WithdrawRequests = React.lazy(() => import('./pages/withdraw-requests'));
// const SingleRoute = React.lazy(() => import('./pages/single-route'));
// const Dashboard = React.lazy(() => import('./pages/dashboard'));
// const BuySell = React.lazy(() => import('./pages/buy-sell'));
// const Invoice = React.lazy(() => import('./pages/invoice'));
// const Accounts = React.lazy(() => import('./pages/accounts'));
// const Settings = React.lazy(() => import('./pages/settings'));
// const Team = React.lazy(() => import('./pages/team'));
const Reset = React.lazy(() => import('./pages/reset'));
const ResetPassword = React.lazy(() => import('./pages/reset-password'));


class Index extends Component {
    render() {
        return (
            <>
                <React.Suspense fallback={<Sugar color={'#1652f0'} />} >
                    <BrowserRouter >
                        <div id="main-wrapper">
                            <Switch>
                                <Route path='/' exact component={Homepage} />
                                <Route path='/index2'  component={Homepage2} />
                                <Route path='/price' component={Price} />
                                <Route path='/wallet' component={Wallet} />
                                <Route path='/about' component={About} />
                                <Route path='/team' component={Team} />
                                <Route path='/blog' component={Blog} />
                                <Route path='/blog-single' component={BlogSingle} />
                                <Route path='/career' component={Career} />
                                <Route path='/contact' component={Contact} />
                                <Route path='/helpdesk' component={HelpDesk} />
                                <Route path='/faq' component={Faq} />
                                <Route path='/admin_withdrawal_request' component={WithdrawRequests} />
                                <Route path='/admin_dashboard' component={AdminDashboard} />
                                <Route path='/dashboard' component={Dashboard} />
                                <Route path='/buy-sell' component={BuySell} />
                                <Route path='/invoice' component={Invoice} />
                                <Route path='/account_wallet' component={Accounts} />
                                <Route path='/settings' component={Settings} />
                                <Route path='/settings-preferences' component={Preferences} />
                                <Route path='/settings-security' component={SettingsSecurity} />
                                <Route path='/settings-account' component={SettingsAccount} />
                                <Route path='/add-bank-acc' component={AddBankAccount} />
                                <Route path='/add-debit-card' component={AddDebitCard} />
                                <Route path='/lock' component={Locked} />
                                <Route path='/otp-1' component={Otp1} />
                                <Route path='/otp-2' component={Otp2} />
                                <Route path='/privacy-policy' component={PrivacyPolicy} />
                                <Route path='/reset' component={Reset} />
                                <Route path='/password_reset' component={ResetPassword} />
                                <Route path='/login' component={Signin} />
                                <Route path='/signup' component={Signup} />
                                <Route path='/terms-condition' component={TermsCondition} />
                                <Route path='/verify-step-1' component={VerifyStep1} />
                                <Route path='/verify-step-2' component={VerifyStep2} />
                                <Route path='/verify-step-3' component={VerifyStep3} />
                                <Route path='/verify-step-4' component={VerifyStep4} />
                                <Route path='/verify-step-5' component={VerifyStep5} />
                                <Route path='/verify-step-6' component={VerifyStep6} />
                                <Route path='/history' component={History} />
                                <Route path='/demo' component={Demo} />
                                <Route path='/:email' component={SingleRoute} />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </React.Suspense>
            </>
        );
    }
}

export default Index;