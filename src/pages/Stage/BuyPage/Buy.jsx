import buy from "./Buy.module.css";
import buyHeader from "../../../img/buyHeader.jpg";
import { useNavigate } from "react-router-dom";

const Buy = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={buy.section}>
        <div className={buy.header}>
          <img src={buyHeader} alt="" />
          <div className={buy.headerBtn}>
            <button onClick={() => navigate(-1)}>Назад</button>
          </div>
        </div>
        <div className={buy.container}>
          <h1>Покупка Участка</h1>
          <p>
            Площадь территории следует выбирать исходя из планируемых габаритов
            постройки. Для комфортного проживания количество земли должно быть в
            несколько раз больше, чем периметр здания. Важно разобраться в
            юридических аспектах назначения земель. Убедитесь, что участок
            пригоден для возведения жилого помещения. Как правило, такое
            разрешение по-умолчанию выдается местности с целевым назначением
            ИЖС. В этом случае Вам будет позволено зарегистрироваться
            (прописаться) в новом жилище как в обычном многоквартирном. Перед
            тем, как разобрать основные этапы строительства здания, перечислим
            несколько важных критериев при выборе места проживания:
            благоприятная экологическая обстановка местности; ландшафт
            территории без резких перепадов, склонов, холмов; доступность
            коммуникаций (газ, вода, электричество и т. п.); дороги и подъездные
            пути надлежащего качества; инфраструктура позволяет устроить
            комфортный быт. Если все, или большинство из этих параметров совпали
            — можно оформлять сделку по покупке этой площади.
          </p>
          <ul>
            <li>благоприятная экологическая обстановка местности;</li>
            <li>ландшафт территории без резких перепадов, склонов, холмов;</li>
            <li>
              доступность коммуникаций (газ, вода, электричество и т. п.);
            </li>
            <li>дороги и подъездные пути надлежащего качества;</li>
            <li>инфраструктура позволяет устроить комфортный быт.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Buy;