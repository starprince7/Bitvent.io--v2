import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import Footer1 from '../layout/footer1'
import Header2 from '../layout/header2'
// QR images
import QrCode from '../../images/QR-code/QR-placeholder.png'
import BCH from '../../images/QR-code/bitcoin_cash.jpg'
import ETH from '../../images/QR-code/ethereum.jpg'
import BTC from '../../images/QR-code/bitcoin.jpg'


function Invoice({ invoice, user }) {

    // Purpose of this func
    // After Code-Spliting the bundled files
    // The App does not load the single page completely.
    // SOLUTION:
    // 1. Reload page after the first complete DOM load-up
    useEffect(() => {
        // Get The Refresh Count First!
        const num_of_refresh = JSON.parse(localStorage.getItem('num_of_refresh'))

         // On Component Mount Persist The Refresh Count onCondition Second
        localStorage.setItem('num_of_refresh', JSON.stringify((num_of_refresh >=2 ? -1 : num_of_refresh) + 1))

        setTimeout(() => {
            if (num_of_refresh <= 1) {
                window.location.reload()
            }
        }, 500)
    }, [])


    const [address, setAddress] = useState('')
    const [srcImage, setSrcImage] = useState(QrCode)
    const walletSelectRef = useRef(null)

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '15px',
        borderBottom: 'solid 1px #869ab814'
    }

    const handle_wallet_select = ({ invoice }) => {
        const wallet = walletSelectRef.current.value

        if (wallet === 'bitcoin') {
            setAddress("bc1q2p4kdevvjfddtu4xzpaq696jdy4t777sgrxddc");
            setSrcImage(BTC)
        } else if (wallet === 'ethereum') {
            setAddress("0xba28Bc64E9f1C2AFA7A1C5A89E025b69aDE20267");
            setSrcImage(ETH)
        } else if (wallet === 'litecoin') {
            setAddress("Litcoin");
            // setSrcImage('')
        } else if (wallet === 'bitcoin cash') {
            setAddress("qp4gt2nrmzcpxg4k7vk84mdn7wvhz80nxgfl3zl2lq");
            setSrcImage(BCH)
        } else if (wallet === "") {
            setAddress("")
            setSrcImage(QrCode)
        }
    }

    const payment_confirmation_message = (e) => {
        e.preventDefault()
        alert(
            `Hi ${user?.name}, please send your evidence of payment to our live customer support at the right-bottom corner of your screen for payment confirmation.`
        )
    }
    
    return (
        <div>
            <Header2 />
                <div className="container p-5">
                    <div className="invoice-content">
                        <div style={style}>
                            <h4>Email</h4>
                        <p>{ user?.email }</p>
                        </div>
                        <div style={style}>
                            <h4>Plan</h4>
                        <p>{ invoice?.plan }</p>
                        </div>
                        <div style={style}>
                            <h4>Amount</h4>
                            <p>{ invoice?.amount }</p>
                        </div>
                    </div>
                    <div className="mt-5 pt-3 text-center">
                        <h4> <strong>WALLET ADDRESS</strong> </h4>
                </div>
                <div className="text-center my-2">
                    <img src={srcImage} style={{width: "250px", margin: "5px 0"}} className="img-thumbnail " alt="QR" />
                </div>
                    <div className="card-body">
                        <form className="form">
                            <p className="mr-sm-2">Copy Address</p>
                            <div className="form-group mb-5">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        {/* <label className="input-group-text"><i className="fa fa-money"></i></label> */}
                                </div>
                                    <input value={address} type="text" name="deposit_amount"  className="form-control text-center" placeholder="WALLET ADDRESS" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text"><i class="fas fa-coins"></i></label>
                                    </div>
                                    <select onChange={handle_wallet_select} ref={walletSelectRef}  name="plan_type" className="form-control">
                                        {/* <option>Bank of America ********45845</option> */}
                                        {/* <option>Master Card ***********5458</option> */}
                                        <option value="">Select </option>
                                        <option value="bitcoin">Bitcoin</option>
                                        <option value="ethereum">Ethereum</option>
                                        {/* <option value="litecoin">Litecoin</option> */}
                                        <option value="bitcoin cash">Bitcoin Cash</option>
                                    </select>
                                </div>
                            </div>
                            <span style={{fontSize: '13px'}}>Confirm that you have made payment.</span>
                        </form>
                        <button onClick={payment_confirmation_message} type="submit" name="submit" className="btn btn-success btn-block mt-1">Approve</button>
                    </div>
                </div>
            <Footer1 />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        invoice: state.dashboard_state.invoice,
        user: state.dashboard_state.user
    }
}

export default connect(mapStateToProps)(Invoice)
