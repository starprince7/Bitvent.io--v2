import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import Footer1 from '../layout/footer1'
import Header2 from '../layout/header2'
import QrCode from '../../images/QR-code/QR-placeholder.png'


function Invoice({ invoice }) {
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
            setAddress("Bitcoin");
            // setSrcImage('')
        } else if (wallet === 'ethereum') {
            setAddress("Ethereum");
            // setSrcImage('')
        } else if (wallet === 'litecoin') {
            setAddress("Litcoin");
            // setSrcImage('')
        } else if (wallet === 'bitcoin cash') {
            setAddress("Bitcoin Cash");
            // setSrcImage('')
        }
    }
    
    return (
        <div>
            <Header2 />
                <div className="container p-5">
                    <div className="invoice-content">
                        <div style={style}>
                            <h4>Email</h4>
                        <p>{ invoice?.email }</p>
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
                                        <option value="litecoin">Litecoin</option>
                                        <option value="bitcoin cash">Bitcoin Cash</option>
                                    </select>
                                </div>
                            </div>
                            <span style={{fontSize: '13px'}}>Confirm that you have made payment.</span>
                            <button type="submit" name="submit" className="btn btn-success btn-block mt-1">Approve</button>
                        </form>
                    </div>
                </div>
            <Footer1 />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        invoice: state.dashboard_state.invoice
    }
}

export default connect(mapStateToProps)(Invoice)
