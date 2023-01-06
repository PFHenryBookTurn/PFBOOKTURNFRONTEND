import React from "react";
import { useState } from "react";
import stylesResults from "../Results/Results.module.css";
import CardResult from "../../components/CardResult/CardResult";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusiness } from "../../redux/actions/business/getBusiness";
import SearchAndFilter from "../searchAndFilter/SearchAndFilter";
import Paginado from "../Paginado/Paginado";
import Link from "next/link";


export default function Results() {
  const dispatch = useDispatch();

  const { businessList } = useSelector((state) => state.business);

  console.log(businessList);

  useEffect(() => {
    dispatch(getBusiness());
  }, []);

  const [state, setState] = useState({
    page: 1,
    business: 6
  })

  const lastBusiness = state.page * state.business;
  const firstBusiness = lastBusiness - state.business
  const actualBusiness = businessList.slice(firstBusiness, lastBusiness)

  const paginado = (pageNum) => {
    setState({
      ...state,
      page: pageNum
    })
  }

  useEffect(() => {
    setState({
      ...state,
      page: 1
    })
  },[businessList])

  return (
    <div className={stylesResults.resultsContainer}>
      <div className={stylesResults.categoriaOResultado}>
        categoría/búsqueda {businessList.length} resultados
      </div>
      <div className={stylesResults.searchbarContainer}>
        <SearchAndFilter />
      </div>
  
      <div>
        { actualBusiness.length && actualBusiness.map((e) => {
          return <CardResult key={e.id} id={e.id} name={e.attributes.name} services={e.attributes.services.data} image={e.attributes.BusinessPic?.data?.attributes.formats.small.url ? `http://localhost:1337${e.attributes.BusinessPic.data?.attributes.formats.small.url}` : "https://avalos.sv/wp-content/uploads/295-default-featured-image.png"}/>

        })}
      </div>
      <div>
        <Paginado businessPerPage={state.business} allBusiness={businessList.length} paginado={paginado} currentPage={state.page} />
      </div>
    </div>
  );
}
