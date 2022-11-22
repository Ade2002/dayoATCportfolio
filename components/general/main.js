const Main = ({ children, mainMargin }) => {
  return (
    <>
      <main className={!mainMargin ? " " : "mainMargin"}>{children}</main>
    </>
  );
};
export default Main;
