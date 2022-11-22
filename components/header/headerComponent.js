import HEAD from "./head";
import Header from "./Header";

const HeaderComponents = ({
  LinkButtonTo,
  LinkButtonContents,
  LinkButtonClasses,
}) => {
  return (
    <>
      <HEAD />
      <Header
        LinkButtonTo={LinkButtonTo}
        LinkButtonContents={LinkButtonContents}
        LinkButtonClasses={LinkButtonClasses}
      />
    </>
  );
};
export default HeaderComponents;
