import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
        style={{ backgroundImage: 'url("/images/backgrounds/BG.webp")' }}
      >
        <div className="container">
          <SectionTitle
            title="Seja Bem-vindo"
            paragraph="Cada membro um discípulo de Jesus que abençoa todos os povos da Terra. Temos um propósito muito maior que nós mesmos. Por isso, nos unimos através dos cultos, redes de faixas etárias, grupos nas casas, discipulados e ministérios, para o Reino de Deus avançar em nossas vidas e no mundo."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
