import React from "react";
import { useState } from "react";
import stylesResults from "../Results/Results.module.css";
import CardResult from "../../components/CardResult/CardResult";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusiness } from "../../redux/actions/business/getBusiness";
import SearchAndFilter from "../searchAndFilter/SearchAndFilter";
import Paginado from "../Paginado/Paginado";


export default function Results() {
  const dispatch = useDispatch();

  const { businessList } = useSelector((state) => state.business);

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
    if (!businessList.length) dispatch(getBusiness());
  }, [dispatch]);

  useEffect(() => {
    setState({
      ...state,
      page: 1
    })
  },[businessList])

  const [state, setState] = useState({
    page: 1,
    business: 6
  })

  if (!hydrated) {
    return null;
  }

  const lastBusiness = state.page * state.business;
  const firstBusiness = lastBusiness - state.business
  const actualBusiness = businessList.slice(firstBusiness, lastBusiness)

  const paginado = (pageNum) => {
    setState({
      ...state,
      page: pageNum
    })
  }

 

  return (
    <div className={stylesResults.resultsContainer}>
      <div className={stylesResults.searchbarContainer}>
        <SearchAndFilter />
      </div>

      <h1 className="text-center text-2xl mt-5 font-bold font-cool_p tracking-widest">
        Se han encontrado {businessList.length} resultados
      </h1>
  
      <>
        { actualBusiness.length && actualBusiness.map((e) => {
          return <CardResult key={e.id} id={e.id} name={e.attributes.name} services={e.attributes.services.data} categories={e.attributes.categories.data} image={"https://avalos.sv/wp-content/uploads/295-default-featured-image.png"}/>




        })}
      </>
      <div>
        <Paginado businessPerPage={state.business} allBusiness={businessList.length} paginado={paginado} currentPage={state.page} />
      </div>
    </div>
  );
}
