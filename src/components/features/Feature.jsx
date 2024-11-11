import  "./feature.css";
import NavScrollExampler from "../home/NavScrollExample"
import Footer from "../footer/Footer";

const Feature = ()=>{
    return(
        <>
        <NavScrollExampler/>
       
       <div className="topImg">
            <img src="../public/img/lazy.jpg" alt="person sleeping image" / >
        </div>
        <div>
            <div className="featureTitle">
                <img src="../public/img/Block Websites.jpg" alt="" />
                <h1>Block Websites</h1>
                <div className="blockWebsiteDescription">
                <p id="blockWebsiteDescription">Whether it’s Facebook, ESPN, or YouTube, block an unlimited number of distracting websites so you can focus on what matters.</p>
                </div>
            </div>
        </div>
        <div>
            <div className="featureTitleApp">
                <img src="../public/img/blockapp.webp" alt="" />
                <h1>Block Apps</h1>
                <div className="blockAppWebsiteDescription">
                <p id="blockAppWebsiteDescription">Spending too much time on apps?<br/> Freedom lets you block time-wasting apps – from email to addicting games.</p>
                </div>
            </div>
        </div>

        <div>
            <div className="featureTitle">
                <img src="../public/img/blocked-account.jpg" alt="" />
                <h1>Blocklists</h1>
                <div className="blockWebsiteDescription">
                <p id="blockWebsiteDescription">Select websites and apps from our preset <br /> lists or create an unlimited number of <br /> customized blocklists to suit your different <br />  situations. <br /><br />

                    With Website Exceptions, you can even block <br />all websites except the ones you need so  you can focus on your work.</p>
                </div>
            </div>
        </div>

        <div>
            <div className="featureTitleApp">
                <img src="../public/img/Sync Across Devices.jpg" alt="" />
                <h1>Sync Across Devices</h1>
                <div className="blockAppWebsiteDescription">
                <p id="blockAppWebsiteDescription">Include as many devices as you’d like in a Freedom session. Freedom supports Mac, Windows, Android, iOS, and Chrome devices.</p>
                </div>
            </div>
        </div>

        <div>
            <div className="featureTitle">
                <img src="../public/img/lockedmode.jpg" alt="" />
                <h1>Locked Mode</h1>
                <div className="blockWebsiteDescription">
                <p id="blockWebsiteDescription">For the days when your willpower  needs  an  extra boost, <br />enable Locked mode to prevent  you from  <br />ending a Freedom session.<br/><br />

Keep your focus, your  commitment to your <br /> goals, and break your most pernicious habits.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
};
export {Feature};