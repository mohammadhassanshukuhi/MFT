import "./footer.scss";
import Logo from "../../../assets/footer/logo.png";
import F from "../../../assets/footer/f.png";
import I from "../../../assets/footer/in.png";
import instagram from "../../../assets/footer/instagram.png";
import Tw from "../../../assets/footer/tw.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bord">
          <div className="right">
            <div className="logo">
              <h1>LOGO</h1>
              <img src={Logo} alt="Logo" />
            </div>
            <div className="paraph">
              <div className="up">
                <h2>تماس با ما</h2>
                <div className="p">
                  <p>آموزش مجازی با کیفیت برای همه؛ بدون مرز، همیشه، همه‌جا</p>
                  <p className="p-2">شماره تماس: 09123456789</p>
                  <p>Email: example@mail.com</p>
                </div>
              </div>
              <div className="link">
                <a>
                  <img src={F} alt="" srcset="" />
                </a>
                <a>
                  <img src={I} alt="" srcset="" />
                </a>
                <a>
                  <img src={instagram} alt="" srcset="" />
                </a>
                <a>
                  <img src={Tw} alt="" srcset="" />
                </a>
              </div>
            </div>
          </div>
          <div className="center">
            <div>
              <h1>لینک‌ها</h1>
              <p>خانه</p>
              <p className="margin">دوره های آنلاین</p>
              <p className="margin">آزمون های آنلاین</p>
              <p className="margin">درباره ما</p>
              <p className="margin">ارتباط با ما</p>
            </div>
            <div>
              <h1>دسته‌بندی</h1>
              <p>خانه</p>
              <p className="margin">برنامه نویسی</p>
              <p className="margin">طراحی</p>
              <p className="margin">کسب و کار</p>
              <p className="margin">سبک زندگی</p>
              <p className="margin">عکاسی</p>
              <p className="margin">موسیقی</p>
            </div>
          </div>
          <div className="shear">
            <h1>مشترک شدن</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.{" "}
            </p>
            <form action="">
              <input type="email" placeholder="ایمیل را وارد کنید" />
              <input type="submit" className="button" value="مشترک شدن" />
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
