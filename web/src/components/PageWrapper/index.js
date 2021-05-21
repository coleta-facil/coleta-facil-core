import "./styles.scss";
import img from "../../assets/icons/footer.svg";

export default function PageWrapper({ children, footerImage = false }) {
  return (
    <div className="page-wrapper">
      <div className="page">{children}</div>

      {footerImage && <img className="img-footer" draggable={false} src={img} alt="ing" />}
    </div>
  );
}
