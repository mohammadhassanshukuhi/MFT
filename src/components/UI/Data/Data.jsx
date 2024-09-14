import "./Data.scss";
import word from "../../../assets/data/word.png";
import pen from "../../../assets/data/pen.png";
import bord from "../../../assets/data/bord.png";
import backgrand from "../../../assets/data/backgrand.png"
import hat from "../../../assets/data/hat.png"
import avatar from "../../../assets/data/avatar-2.png"
import video from "../../../assets/data/video.png"
import p3 from "../../../assets/data/p3.png"

export default function Data() {
  return (
    <>
      <div className="bac">
        <div className="news">
          <dic className="new-1">
            <img className="word" src={word} alt="word" />
            <div className="NW">
              <h1 className="NH">جدیدترین مهارت ها را بیاموزید</h1>
              <p className="NP">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </dic>
          <dic className="new-2">
            <img className="word" src={pen} alt="word" />
            <div className="NW">
              <h1 className="NH">برای یک شغل آماده شوید</h1>
              <p className="NP">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </dic>
          <dic className="new-2">
            <img className="word" src={bord} alt="word" />
            <div className="NW">
              <h1 className="NH">گواهینامه کسب کنید</h1>
              <p className="NP">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </dic>
        </div>
        <img className="backgrand" src={backgrand} alt="" />
        <div className="names">
            
                <img className="hat" src={hat} alt="" />
           
        
                <img className="avatar" src={avatar} alt="" />
       
            
                <img className="video" src={video} alt="" />
           
            
                <img className="p3" src={p3} alt="p3" />
            
        </div>
      </div>
    </>
  );
}
