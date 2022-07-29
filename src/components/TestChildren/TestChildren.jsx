const Main = () => {
  <main>
    <Section title="Section - 1">
      <FirstSectionList />
    </Section>

    <Section title="Section - 2">
      <SecondSectionList />
    </Section>
  </main>;
};

const FirstSectionList = () => (
  <ul>
    <li>
      <img src="" alt="" />
      <div>
        <h3></h3>
        <p></p>
      </div>
    </li>
    <li>
      <img src="" alt="" />
      <div>
        <h3></h3>
        <p></p>
      </div>
    </li>
  </ul>
);

const SecondSectionList = () => (
  <ul>
    <li>
      <img src="" alt="" />
    </li>
    <li>
      <img src="" alt="" />
    </li>
    <li>
      <img src="" alt="" />
    </li>
  </ul>
);

const Section = ({ children, title }) => {
  return (
    <section>
      <div className="container">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Main;
