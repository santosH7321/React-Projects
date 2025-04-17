import HeaderCard from "./HeaderCard";
const HeaderData = () => {

  const resturentDisk = [
    {
      id: "750591",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
      action: {
        link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
        text: "Biryani",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for biryani",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750131",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
      action: {
        link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
        text: "Dosa",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for dosa",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "749876",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
      action: {
        link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
        text: "Chole Bhature",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for chhole bhatoore",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "749868",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
      action: {
        link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
        text: "Cakes",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for cake",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750639",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/f45b3545-7867-4144-b0c3-1a6ac930aeaa_Kachori.png",
      action: {
        link: "https://www.swiggy.com/collections/80448?collection_id=80448&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
        text: "Kachori",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for kachori",
        altTextCta: "open",
      },
      entityId: "80448",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750201",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
      action: {
        link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
        text: "Paratha",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for paratha",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750234",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png",
      action: {
        link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
        text: "Poori",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for poori",
        altTextCta: "open",
      },
      entityId: "80377",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750216",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
      action: {
        link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
        text: "Pav Bhaji",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for pav bhaji",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750643",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
      action: {
        link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
        text: "Idli",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for idly",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750229",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
      action: {
        link: "https://www.swiggy.com/collections/80373?collection_id=80373&tags=layout_CCS_Poha&type=rcv2",
        text: "Poha",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for poha",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750571",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
      action: {
        link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
        text: "Pure Veg",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for veg",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750228",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png",
      action: {
        link: "https://www.swiggy.com/collections/80396?collection_id=80396&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
        text: "Samosa",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for samosa",
        altTextCta: "open",
      },
      entityId: "80396",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "745861",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
      action: {
        link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
        text: "Shake",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for shakes",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750118",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_dhokla.png",
      action: {
        link: "https://www.swiggy.com/collections/80422?collection_id=80422&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
        text: "Dhokla",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for dhokla",
        altTextCta: "open",
      },
      entityId: "80422",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "749786",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
      action: {
        link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
        text: "Omelette",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for omelette",
        altTextCta: "open",
      },
      entityId: "80467",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750225",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
      action: {
        link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
        text: "Salad",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for salad",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750079",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cutlet.png",
      action: {
        link: "https://www.swiggy.com/collections/80414?collection_id=80414&tags=layout_BAU_Contextual%2Ccutlet&type=rcv2",
        text: "Cutlet",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for cutlet",
        altTextCta: "open",
      },
      entityId: "80414",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "749984",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
      action: {
        link: "https://www.swiggy.com/collections/83659?collection_id=83659&tags=layout_CCS_Coffee&type=rcv2",
        text: "Coffee",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for coffee",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83659&tags=layout_CCS_Coffee",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "750637",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
      action: {
        link: "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
        text: "Juice",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for juice",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
      frequencyCapping: {},
      externalMarketing: {},
    },
    {
      id: "749760",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
      action: {
        link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
        text: "Khichdi",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for khichdi",
        altTextCta: "open",
      },
      entityId: "80455",
      frequencyCapping: {},
      externalMarketing: {},
    },
  ];


  return (
    <div className="header-data flex flex-row justify-center items-center p-4 overflow-x-auto ">
      {resturentDisk.map((restaurant) => {
        return <HeaderCard key={restaurant.id} resData={restaurant} />;
      })}
    </div>
  )
};
export default HeaderData;
