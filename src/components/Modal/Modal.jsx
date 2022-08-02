import s from "./Modal.module.scss";

const Modal = () => {
  return (
    <div className={s.backdrop}>
      <h1 className={s.title}>
        <a
          href={
            "https://www.wired.com/story/kazakhstan-cryptocurrency-mining-unrest-energy"
          }
          target="_blank"
          rel="noreferrer"
        >
          {"As Kazakhstan Descends into Chaos, Crypto Miners Are at a Loss"}
        </a>
      </h1>
    </div>
  );
};

export default Modal;
