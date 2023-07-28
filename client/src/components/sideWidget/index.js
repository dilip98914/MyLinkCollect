export default function () {
  return <>

    <div className="col-md-4 sidebar">
      <h4 style={{ "margin-top": "30px", "margin-bottom": "10px" }}>🗞 Subscribe</h4>
      <p>Join 40,000+ crypto enthusiasts for weekly updates:</p>
      <div id="mc_embed_signup">
        <form
          // action="//crypto.us16.list-manage.com/subscribe/post?u=23c3682c299e4d4b34b21b7d8&amp;id=eeb4769b03"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll" className="row">
            <div className="mc-field-group col-md-7 col-sm-12">
              <input type="email" name="EMAIL" className="required email form-control" id="mce-EMAIL" placeholder="Your email"
                style={{ "width": "100%;" }}
              />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ "display": "none" }}></div>
              <div className="response" id="mce-success-response" style={{ "display": "none" }}></div>
            </div>
            {/* <div style={{"position": "absolute", "left": "-5000px;"}} aria-hidden="true"><input type="text" name="b_23c3682c299e4d4b34b21b7d8_eeb4769b03" tabindex="-1" /></div> */}
            <div className="clear col-md-5 col-sm-12 sidebar-button-box">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-danger" />
            </div>
          </div>
        </form>
      </div>
      <h4 style={{ "margin-top": "30px", "margin-bottom": "10px" }}>🔥 Follow</h4>
      <div>
        <a href="https://twitter.com/GetCryptoJobs" style={{ "display": "inline-block" }} target="_blank">
          <img src="imgs/v2-twitter.png" alt="CryptoJobs Twitter" style={{ "width": "48px", "height": "48px" }} />
        </a>
        <a href="https://www.linkedin.com/company/crypto-jobs/" style={{ "display": "inline-block;" }} target="_blank">
          <img src="imgs/v2-linkedin.png" alt="CryptoJobs LinkedIn" style={{ "width": "48px", "height": "48px" }} />
        </a>
        <a href="https://www.facebook.com/GetCryptoJobs/" style={{ "display": "inline-block;" }} target="_blank">
          <img src="imgs/v2-facebook.png" alt="CryptoJobs Facebook" style={{ "width": "48px", "height": "48px" }} />
        </a>
      </div>
      <b style={{ "margin": "20px 0 10px 0", "display": "inline-block" }}>
        CryptoJobs – the leading talent platform to get you from Web2 to Web3
      </b>
      <i style={{ "margin-bottom": "10px", "display": "inline-block;" }}>
        Trusted by 2,500+ Web3 companies around the world
      </i>
      <div className="trusted-by">
        <div className="row" style={{ "padding": "12px 0px;" }}>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/XpiJSfTGiYuVhX11p3U8R47OBLlr9twUQNbTxM0K.png" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/Vo1WMoS5Hpj6zSdpbU2sKgAqSEdBOyqVosIkAypC.jpeg" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/oxcCuuZ8Txtr8pCTJV17bLvl2VeTuJZ3cspozWnF.jpeg" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/uLLQhcNQJOB8hWsrVBCmZEWI9KsmXqUUVDbLDQca.png" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/jVioxY955R0weNwO3aKzWO5xRc6fifmHiPCaMwSC.jpeg" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/ncJnroXT02yhaoed5LSaIOxcgw0ROqBVYdChJ1Of.png" style={{ "border-radius": "10px;" }} />
          </div>
        </div>
        <div className="row" style={{ "padding": "12px 0px;" }}>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/d3MssAQskGPlntOXF2Pqy95YiB5cBTx6A95OsKr1.jpeg" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/sqSyi2PL7EPcfCdMQEMynQK0QHvXshJrt7OPW8pb.png" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/PwxKkn8vU6F3Oq7C4ADOH986uCwm3B6WQ7JIvloo.png" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/fKksZC3DG9hKMULudhk1IXwCuJ0B3QYvrXP6kjZN.png" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/b8xpa0JtFHrV2RkxlOBStoilcVRBnrkksjWXyrWW.jpeg" style={{ "border-radius": "10px;" }} />
          </div>
          <div className="col-xs-2">
            <img className="img-responsive" src="imgs/88jmfH3ugucgNrWZs0ljap7CrtwXMrzhjjIePUdi.jpeg" style={{ "border-radius": "10px;" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <span style={{ "font-style": "italic", "margin-top": "12px", "display": "inline-block" }}>...and many more!</span>
          </div>
        </div>
      </div>
    </div>

  </>
}