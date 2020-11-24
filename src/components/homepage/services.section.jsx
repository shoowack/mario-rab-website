import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./services.scss";

export default function ServicesSection({ scrollWithOffset }) {
  const servicesData = [
    {
      icon: "beaches",
      title: "Beaches",
      content:
        "Otok Rab poznat je po svojim pješčanim plažama, osobito na Loparskom poluotoku. Ima i šljunčanih plaža, neke čak i s vrlo sitnim šljunkom. Najpoznatija pješčana plaža Raba je Rajska plaža na Loparskom poluotoku, s brojnom i raznolikom ponudom dodatnih sadržaja, no na tom je poluotoku još mnogo drugih lijepih pješčanih plaža."
    },
    {
      icon: "fun",
      title: "Fun",
      content:
        "Na Rabu se organiziraju različite manifestacije, tijekom cijele godine, a osobito u ljetnim mjesecima. Većina ih je u gradu Rabu, no i u svim drugim mjestima.<br>     Neke od mnogobrojnih su Rapska fjera, trodnevna je manifestacija kada se oživljava srednjovjekovni duh Raba. Održava se 25., 26. i 27. srpnja i «ne propustite». Završava Rapskim viteškim igrama, natjecanjem rapskih samostreličara, koje se osim na kraju Fjere, održavaju još nekoliko puta godišnje. Manifestaciju uveličaju i konkurencija njihovi prijatelji Balestrieri iz San Marina.<br>     Noćni život grada Raba relativno je bogat i raznolik. Nekoliko kafića i noćnih klubova, a oni koji doslovno traže zabavu do jutra, u beach barove ili na sjeveru, na Loparskom poluotoku, ili na jugu, na Pudarici beach-party club Santos."
    },
    {
      icon: "active-holidays",
      title: "Active Holidays",
      content:
        "Na otoku postoji čak 157 km uređenih biciklističkih staza, te 144 km pješačkih staza, raj za ljubitelje biciklizma i šetnje. Bicikl, kojeg u svakom mjestu možete i unajmiti, idealno je sredstvo za otkrivanje ljepota i znamenitosti ovog otoka. Na otoku postoji nekoliko ronilačkih klubova, u više mjesta. Svaki od njih pružit će roniocima sve potrebne usluge, ponuditi najam opreme, a većina ih organizira i tečajeve ronjenja, početne i napredne. Interesantnih lokacija za ronjenje u moru oko Raba je mnogo i raznolike su. Naći ćete tu od brojnih prirodnih ljepota, novijih olupina, pa sve do mnoštva amfora na mjestu antičkog brodoloma kod rta Sorinj. U većini mjesta možete unajmiti čamac, pedalinu, ski jet i jahtu. Za one koji će upravljanje čamcem  prepustiti nekom iskusnijem, su mnogobrojni izleti brodom i taksi brodice po pristupačnoj cijeni za vožnju čamcem. Nautičarima će biti zanimljivo da se na otoku nalaze dvije marine. Jedna u dubokoj i dobro zaštićenoj uvali Supetarska Draga, a druga u gradskoj luci Raba, s prekrasnim pogledom na stari grad. Tu su sportski tereni – teniski tereni, igrališta za odbojku na pijesku, mini golf, stolni tenis, boćanje, nogomet, košarka, wellness centri, organizirani aeorobik na pijesku i slično. Na nekoliko plaža nude se zanimljivi organizirani sadržaji za djecu."
    },
    {
      icon: "gastronomic-offer",
      title: "Gastronomic offer",
      content:
        "Na otoku postoji čak 157 km uređenih biciklističkih staza, te 144 km pješačkih staza, raj za ljubitelje biciklizma i šetnje. Bicikl, kojeg u svakom mjestu možete i unajmiti, idealno je sredstvo za otkrivanje ljepota i znamenitosti ovog otoka. Na otoku postoji nekoliko ronilačkih klubova, u više mjesta. Svaki od njih pružit će roniocima sve potrebne usluge, ponuditi najam opreme, a većina ih organizira i tečajeve ronjenja, početne i napredne. Interesantnih lokacija za ronjenje u moru oko Raba je mnogo i raznolike su. Naći ćete tu od brojnih prirodnih ljepota, novijih olupina, pa sve do mnoštva amfora na mjestu antičkog brodoloma kod rta Sorinj. U većini mjesta možete unajmiti čamac, pedalinu, ski jet i jahtu. Za one koji će upravljanje čamcem  prepustiti nekom iskusnijem, su mnogobrojni izleti brodom i taksi brodice po pristupačnoj cijeni za vožnju čamcem. Nautičarima će biti zanimljivo da se na otoku nalaze dvije marine. Jedna u dubokoj i dobro zaštićenoj uvali Supetarska Draga, a druga u gradskoj luci Raba, s prekrasnim pogledom na stari grad. Tu su sportski tereni – teniski tereni, igrališta za odbojku na pijesku, mini golf, stolni tenis, boćanje, nogomet, košarka, wellness centri, organizirani aeorobik na pijesku i slično. Na nekoliko plaža nude se zanimljivi organizirani sadržaji za djecu."
    },
    {
      icon: "history",
      title: "Rab's History and Heritage",
      content:
        "Otok Rab bio je naseljen još u paleolitiku, starijem kamenom dobu, što potvrđuju arheološki nalazi na Loparskom poluotoku.<br>     Iz mlađih razdoblja prapovijesti nalazi su brojni diljem otoka i naseljavaju ga Liburni. Nalazišta na Loparskom poluotoku, Punta Zidine, potječe iz prapovijesnih vremena i  antike.<br>     Liburni su otoku dali i ime, Arb, što znači taman, šumovit. Rimljani kasnije ime prihvaćaju, mijenjaju ga tek u Arba, a Hrvati u Rab.<br>     Grad Rab u rimsko vrijeme u 10. godini pr. n. e. dobiva status municipija, a u 2. stoljeću pridjev Felix, sretan, postaje Felix Arba.<br>     Na život u rimsko doba na Loparskom poluotoku ukazuje otkriće keramičarske radionice.<br>     Grad i otok sretan je ostao i nakon Rimljana, pa je izbjegao mnoge ratove i razaranja. Od svih zala, jedino nije mogao izbjeći epidemije kuge. Grad Rab i danas je ostao malen srednjovjekovni gradić zatvoren u gradskim zidinama na svom poluotoku. Prepoznatljiv po svoja četiri zvonika, tri romanička i jednim iz 17. stoljeća. Gradić obiluje kulturno-povijesnim znamenitostima.<br>     Znameniti Rabljanin u povijesti je Sveti Marin, koji je s Loparskog poluotoka, kao klesar otišao na Apeninski poluotok u potrazi za poslom.<br>     Bježeći od progona kršćana, sklonio se na brdo Titan i tamo sagradio crkvicu, koja je postala okupljalište i drugih kršćana. Tako je, početkom 4. stoljeća, nastao San Marino, najstarija živuća republika na svijetu. Otok Rab i Republika San Marino danas su prijatelji.<br>     Ivan Krstitelj Rabljanin rodio se u gradu Rabu oko 1470. godine. Bio je ljevač zvona i topova, a svjetsku je slavu stekao odlaskom u Dubrovnik. Na Rabu ne postoji niti jedno njegovo zvono. U palači Dominis, jednoj od mnogobrojnih znamenitosti grada Raba, podignutoj krajem 15. stoljeća, rođen je 1560. godine Markantun de Dominis, teolog, matematičar, fizičar i filozof. Bio je senjski biskup, a kasnije splitski nadbiskup, kada piše djelo De republica ecclesiastica, u kojem se zalaže za dijalog između crkava i njihovo ujedinjenje, predstavljajući preteću ekumenizma.<br>     Njegove ideje dovele su ga u sukob s Rimokatoličkom crkvom, te se odriče titule nadbiskupa i odlazi najprije u Njemačku, a zatim u Englesku. Na Cambridgeu postaje doktor teologije, kao prvi Hrvat s doktorskom titulom na nekom engleskom sveučilištu.<br>     Isaac Newton u jednom od svojih djela odaje Dominisu priznanje za njegov doprinos na području optike.<br>     Nakon izbora pape Grgura XV, 1622. godine, Dominis se vraća u Rim, no ubrzo papa umire, a Dominis dolazi pod udar Inkvizicije. Umro je za vrijeme suđenja u inkvizicijskom zatvoru, 1624. godine, navodno prirodnom smrću. Posmrtno je osuđen kao heretik, te je njegovo tijelo provučeno ulicama Rima, javno spaljeno, te zajedno s njegovim pisanim radovima bačeno u Tiber."
    },
    {
      icon: "arrival",
      title: "Arrival to Rab",
      content:
        "Na otok Rab automobilom se može doći dvjema trajektnim linijama. Izravna veza s kopnom je trajektna linija Stinica – Mišnjak. Trajekt na ovoj liniji vozi vrlo često, osobito u ljetnim mjesecima, a vožnja traje oko 15 minuta. Trajektnom linijom Valbiska – Lopar povezan je s otokom Krkom, koji je s kopnom povezan mostom. Trajekti na ovoj liniji ne voze često, a putovanje traje oko sat i pol, idealno za ljubitelje vožnje trajektom. Autobusne linije za grad Rab, kojih je više ljeti, postoje iz Rijeke i Zagreba. Iz Rijeke postoji katamaranska veza za grad Rab. Na otoku postoji solidno organiziran lokalni javni prijevoz. Najbliža međunarodna zračna luka je riječka, kod Omišlja na otoku Krku, a ni zadarska nije daleko. U obje zračne luke leti nekoliko niskotarifnih zrakoplovnih kompanija iz mnogih europskih gradova, može se unajmiti automobil, a postoje i organizirani transferi do Raba."
    }
  ];

  return (
    <section className="content-section services" id="island">
      <div className="container">
        <div className="row">
          {servicesData.map((service, index) => {
            const { icon, title, content } = service;

            return (
              <div className="col-12 col-sm-6 col-md-4 mt-4" key={index}>
                <div className="wrapper">
                  <p
                    className="service-icon"
                    style={{
                      background: `url(/${icon}.svg) #01CD9E center no-repeat`
                    }}
                  ></p>
                  <h3 className="service-title">{title}</h3>
                  <p
                    className="info"
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></p>
                  <Link
                    className="btn btn-primary"
                    smooth
                    scroll={(el) => scrollWithOffset(el)}
                    to={`/rab-island#${icon}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
