import AboutSectionOne from "./components/AboutSectionOne";
import AboutSectionTwo from "./components/AboutSectionTwo";
import Video from "@/components/Video";
import Breadcrumb from "@/components/Common/Breadcrumb";

const contribua = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default contribua;
