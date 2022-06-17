import { ReactComponent as DonateLogoSVG } from "../../assets/18517442281644149665.svg";
import { ReactComponent as BookLogoSVG } from "../../assets/book-svgrepo-com.svg";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.collectibleswithcauses.org/starwarscollectiblesdonation.html#:~:text=We%20offer%20a%20fair%20market,228%2D7320%20to%20donate%20today!",
    name: "donation_logo",
    component: <DonateLogoSVG />,
  },
  {
    url: "https://youtini.com/list/chronological-canon",
    name: "book_logo",
    component: <BookLogoSVG />,
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      <div style={{ color: "white", paddingTop: "1rem" }}>
        For further info contact: publicrelations@lucasfilm.com
      </div>
    </footer>
  );
};
