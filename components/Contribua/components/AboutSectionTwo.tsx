import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">

      <SectionTitle
          title="Próximos desafios"
          paragraph=""
          center
          mb="10px"
        />

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Nova sede
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Estamos nos mudando para um espaço novo, muito maior e com mais estruturas. Barracão que
                comporta mais de 2000 pessoas, banheiros, fraldário, cozinhas, refeitório, espaço gourmet,
                espaço kids, salas comerciais, amplo estacionamento. Para isso, temos um compromisso
                mensal a ser cumprido.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Mudança
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Por ser um espaço maior que anteriormente era um auto shopping, temos como demanda
                fazer todo processo de transição para uma Igreja. Para isso, será necessário a compra de 400
                cadeiras, construção de palco, compra de novos equipamentos audiovisuais, iluminação,
                transmissão, caixa altas para fachadas, entre outros.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Livraria e espaço gourmet
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Temos como sonho, montar uma livraria própria da Igreja Avance. Entendemos a importância
                  de material para crescimento e avanço, e como Igreja queremos oferecer as melhores
                  ferramentas para isso. E também, um espaço gourmet para momentos de comunhão,
                  discipulado e reuniões informais.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Manutenção
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Segurança; limpeza; administração; e demais serviços como água; luz; internet; para um bom
                  funcionamento do local.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Ações sociais e evangelismo
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Saímos da região do Bairro Novo para o Xaxim, mas continuamos entendendo a
                  responsabilidade social e evangelística da Igreja com a comunidade.
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
