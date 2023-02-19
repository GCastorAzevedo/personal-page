import Head from "next/head";
import { GridHorizontal } from "../../components/curriculum/grid";
import LeftColumn from "../../components/curriculum/leftColumn";
import RightColumn from "../../components/curriculum/rightColumn";
import Footer from "../../components/curriculum/footer";

export default function Curriculum() {
  const name = "Gabriel Castor";
  return (
    <>
      <Head>
        <title>Curriculum Vitae </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GridHorizontal>
        <LeftColumn />
        <RightColumn />
      </GridHorizontal>

      <style jsx>{`
        html,
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
      <style jsx global>{`
        body {
          color: #999 !important;
          background-color: #f1f1f1 !important;
        }
        * {
          box-sizing: border-box;
        }
        .color-violet {
          color: #fff !important;
          background-color: #673ab7 !important;
        }
        .color-text-violet {
          color: #673ab7 !important;
        }
        .color-teal {
          color: #fff !important;
          background-color: #009688 !important;
        }
        .color-text-teal {
          color: #009688 !important;
        }
        .color-light-grey {
          color: #000 !important;
          background-color: #f1f1f1 !important;
        }
        .color-dark-grey {
          color: #fff !important;
          background-color: #ccc !important;
        }
        .color-white-cream {
          background-color: #fffff2;
        }
        .color-white {
          background-color: #fff;
        }
        .color-text-white,
        .color-hover-text-white:hover {
          color: #fff !important;
        }
        .right-column {
          padding: 20px 24px 0px 32px;
          background-color: #fff;
        }
        .left-column {
          padding: 20px 24px 20px 24px;
          background-color: inherit;
        }
      `}</style>
    </>
  );
}
