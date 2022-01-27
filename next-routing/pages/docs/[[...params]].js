import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    )
  } else if (params.length === 1) {
    return (
      <h1>Viewing docs for deature {params[0]}</h1>
    )
  }

  // The code below is left in in case the url tries to render anything
  // where the array has a length greater than 2
  return (<h1>
    Docs Home Page</h1>
  )}

export default Doc;
