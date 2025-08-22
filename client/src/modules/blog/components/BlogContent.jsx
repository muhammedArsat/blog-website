import React, { useEffect, useState } from "react";
import { Facebook, Linkedin, Link, Twitter, ChevronUp } from "lucide-react";
import AuthorCard from "./AuthorCard";
const BlogContent = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    setScrollPercentage(scrollPercent);
  };

  const scrollTo = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-start w-full md:w-[75%] p-2 ">
      {/* //!Left div  */}
      <div
        className="fixed bottom-3 right-3 bg-white shadow-lg rounded-full w-11 h-11 text-black flex justify-center
       items-center z-10 md:hidden"
      >
        <div
          className="flex justify-center items-center w-10 h-10  rounded-full z-10"
          style={{
            background: `conic-gradient(rgb(168 85 247) ${scrollPercentage}%,rgb(229 231 235)${scrollPercentage}% )`,
          }}
        >
          <div className="w-9 h-9 flex  justify-center items-center bg-white rounded-full z-20">
            <ChevronUp onClick={() => scrollTo("#content")} />
          </div>
        </div>
      </div>
      <div className=" px-5 sticky top-28 hidden md:block">
        <div
          className="flex justify-center items-center w-24 h-24 rounded-full p-[0.1rem]"
          style={{
            background: `conic-gradient(rgb(168 85 247) ${scrollPercentage}%, rgb(229 231 235) ${scrollPercentage}%)`,
          }}
        >
          <div className="flex flex-col justify-center items-center w-[5.5rem] h-[5.5rem] rounded-full bg-white dark:bg-dark-card shadow-lg text-center font-body">
            <span className="font-bold text-lg">6</span>
            <span className="text-sm text-light-secondary dark:text-dark-secondary">
              min read
            </span>
          </div>
        </div>

        <div className="flex flex-col px-7 gap-4  w-full   mt-4 text-light-secondary dark:text-dark-secondary ">
          <Twitter className="w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors" />
          <Facebook className="w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors" />
          <Linkedin className="w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors" />
          <Link className="w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors" />
        </div>
      </div>

      {/* //?center div  */}
      <div className="  md:max-w-5xl w-full px-2" id="content">
        <h1 className="font-body leading-relaxed  text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit
          inventore esse officiis sapiente accusantium, corporis hic quis aut
          fuga culpa illum saepe quaerat quo dolorum unde. Quisquam inventore
          ducimus similique quis? Porro maxime nesciunt nostrum nisi cum fuga
          distinctio, modi repellendus est soluta temporibus officiis sapiente
          nihil? Pariatur id dolor iusto. Amet provident hic maxime incidunt.
          Aut aliquid molestias maxime perspiciatis excepturi amet hic esse
          perferendis tempora vel autem nesciunt animi reprehenderit ullam dicta
          veniam, facere unde vitae a consequuntur blanditiis nemo? Quis quas
          inventore nulla, magni quasi doloribus fugiat similique quos cumque
          voluptatum necessitatibus sequi perspiciatis. Possimus nisi asperiores
          nostrum reiciendis exercitationem provident? Asperiores voluptatum cum
          maiores praesentium officiis optio eligendi amet? Vero iste odio
          assumenda optio necessitatibus iure deleniti vel laborum voluptatibus
          soluta fugit suscipit rem repellat laboriosam sapiente expedita autem
          nam, atque doloremque. Sint nobis cumque praesentium accusantium a
          officiis adipisci! Distinctio porro error at ad vel, quae dolor
          voluptatibus ducimus autem placeat doloremque aut, natus, accusantium
          sit voluptate beatae! Enim perferendis quae quaerat est ea. Saepe a
          repellat mollitia recusandae impedit, vitae facilis suscipit?
          Doloremque vel illum aliquam, velit voluptate maiores officiis non
          eligendi, ipsum itaque deleniti ea fugiat debitis incidunt corrupti
          aperiam dolor cum. Illo, excepturi eaque. Ab totam necessitatibus
          beatae, quidem eius modi ipsam atque repellat? Quam aut animi vero
          consequatur quibusdam consequuntur enim ipsa placeat veritatis ducimus
          cum sint nostrum, voluptatum, beatae et facilis a tenetur est, sunt
          voluptatem magni dolorem rem ea corrupti. Culpa qui impedit
          consequatur dolores placeat voluptatibus pariatur sapiente enim
          aperiam obcaecati. Cum, molestiae. Eaque temporibus qui officia eos.
          Dignissimos perferendis temporibus veniam neque et quas quibusdam,
          accusantium laudantium provident quaerat ipsam in, molestias earum
          dicta cum. Quidem modi nostrum fuga nam sequi tempora soluta impedit
          doloremque quae iure assumenda facilis error quos temporibus alias
          explicabo expedita omnis obcaecati, eveniet nulla. Ut quidem
          asperiores necessitatibus nam similique consequuntur repudiandae esse
          accusantium doloremque architecto error nesciunt eius cum, enim
          provident adipisci recusandae eveniet alias expedita libero. Ipsam
          quibusdam provident, nihil qui illo consectetur quidem atque beatae
          sapiente nulla quaerat, nemo cumque magnam, eos cum modi laborum
          perferendis itaque vero ducimus porro. Dolor excepturi similique
          perferendis optio quas dolorem, dolore sequi ex minima! Officiis enim
          sunt quaerat. Nostrum aspernatur iste ipsum quisquam mollitia
          exercitationem aut natus rem quam vero animi ut ab inventore, deleniti
          saepe possimus eveniet aperiam laborum, quidem doloremque quos?
          Consequuntur nisi illum eos earum, pariatur repellendus voluptatibus
          eligendi modi numquam error, autem, quos consequatur neque esse hic
          facilis laboriosam non mollitia aperiam delectus ipsa sit itaque enim.
          Molestias aspernatur voluptatibus perferendis, atque nemo consequuntur
          debitis accusantium! Et laborum, nihil quam, eos recusandae eum
          quisquam, optio error minus cumque provident modi porro! Odit quo unde
          vitae quidem distinctio eveniet laboriosam inventore aspernatur
          tenetur, dolor veniam modi! Veniam, omnis! Molestiae nisi vero quis
          nulla ipsa ab quaerat assumenda eius amet odit! Atque expedita
          sapiente distinctio ex deserunt laboriosam eaque suscipit unde velit
          illo sunt voluptate delectus quaerat, quo autem sed quos et nisi.
          Soluta optio, voluptas quae vitae necessitatibus nemo sapiente aliquam
          omnis velit voluptatum. Placeat cumque repudiandae mollitia sit
          aperiam animi voluptatem in unde amet. Omnis accusamus magni ipsum
          ducimus in reiciendis, et, a dicta necessitatibus error sequi fugit
          libero voluptatem ab quia quo quaerat odio sed delectus modi rem vel
          possimus. Possimus et accusantium deleniti quibusdam repellat nesciunt
          corrupti quos, voluptas provident tempora debitis corporis nam id
          obcaecati, pariatur sunt eum porro accusamus, incidunt sequi iusto.
          Molestiae impedit esse quibusdam provident doloribus eaque aut
          voluptatem, incidunt iste, nobis delectus, nesciunt sequi itaque. Quod
          voluptate saepe blanditiis nemo, sed explicabo optio soluta vero
          impedit. Atque quaerat voluptatem fugit ullam sunt sint accusamus enim
          aspernatur adipisci, cupiditate consectetur dolore possimus pariatur
          at. Accusantium dolore libero perspiciatis, corporis, iste quaerat
          incidunt cumque laborum omnis consequuntur ratione pariatur
          repellendus. Repellat numquam id deserunt sequi esse in enim
          voluptatibus eveniet similique voluptate tempore, animi minima
          cupiditate eius! Omnis natus a incidunt laboriosam aut quis deserunt.
          Corrupti non asperiores fugiat modi vero consequuntur repellat ratione
          omnis delectus officiis, similique error nemo corporis id accusamus
          ullam placeat libero esse molestiae consequatur pariatur ab porro
          maxime. Consequatur, soluta? Unde aliquam iste voluptate pariatur
          maiores adipisci dolorem maxime enim accusantium commodi ratione esse
          rem atque consectetur asperiores veritatis nobis perspiciatis tempore
          cupiditate laboriosam veniam, accusamus dolor laborum tenetur. Unde,
          provident modi vel totam odit eius atque voluptatibus rerum nulla
          repellat facilis ipsa rem ullam esse praesentium, temporibus minima
          architecto. Repudiandae aspernatur nemo quibusdam velit deleniti cum
          eligendi, voluptates, architecto similique labore quos accusamus
          obcaecati natus eveniet officiis rem laborum eaque beatae iusto quod.
          Ad veniam aperiam ipsam saepe hic odit optio voluptates fugiat cumque.
          Itaque magnam explicabo, est quas ullam voluptatibus laudantium
          dolores fuga aut quibusdam amet, quaerat sunt excepturi assumenda
          autem laborum praesentium eius. Ducimus fuga doloribus hic voluptas
          qui autem a, cum dignissimos amet. Veritatis nihil officia nulla alias
          tenetur est natus quidem deleniti maiores! Fugit repellendus ratione
          modi ducimus possimus, ad inventore commodi quam quidem alias
          aspernatur ipsam eos neque dicta adipisci culpa a officia accusantium.
          Facere ipsum esse pariatur placeat neque natus eaque! Ipsa sit eum
          ipsum dolor? Voluptate unde, consequatur, voluptatibus id, asperiores
          qui natus dolorem assumenda ex modi distinctio quas quos quidem
          temporibus. Nulla eaque optio vitae. Laudantium ratione delectus
          doloremque tenetur nobis aliquam. Quis, provident, architecto iure
          voluptatibus praesentium tenetur temporibus libero rem fuga odio autem
          eligendi deserunt doloremque, illo quia qui sit nihil eveniet eaque
          sapiente! Labore placeat error quas ut a id, molestiae, aliquid quam
          quo cumque nobis magnam laboriosam ex! Porro doloribus quia, inventore
          autem delectus illum vero id, fugit accusantium quos mollitia totam
          quam nulla dolorem velit vitae non itaque necessitatibus tenetur vel
          facere, odio suscipit! Accusantium temporibus dolorum rerum beatae
          sequi nostrum. Et, voluptatibus mollitia! Animi quaerat nemo, modi
          expedita culpa ipsam iusto. Accusamus expedita iusto eos impedit nisi
          modi similique! Nihil assumenda, est iure architecto ad eveniet libero
          nesciunt ab corrupti obcaecati tenetur mollitia, vitae voluptate saepe
          illum cumque alias tempore velit minus sint ratione ullam? Nihil
          similique praesentium, dolores corporis ex aperiam?
        </h1>
      </div>

      {/* //?Right div  */}
      <div className="md:sticky md:top-28  ">
        <AuthorCard />
      </div>
    </div>
  );
};

export default BlogContent;
