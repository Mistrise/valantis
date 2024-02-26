import {Grid, Skeleton} from "@mui/material";
import React from "react";

const CardSkeleton = () => {
  return (
      <>
          <Grid item xs={2} sm={2} md={2} >
              <Skeleton variant="rectangular" width={275} height={220}/>
          </Grid>
          <Grid item xs={2} sm={2} md={2} >
              <Skeleton variant="rectangular" width={275} height={220}/>
          </Grid>
          <Grid item xs={2} sm={2} md={2} >
              <Skeleton variant="rectangular" width={275} height={220}/>
          </Grid>
          <Grid item xs={2} sm={2} md={2} >
              <Skeleton variant="rectangular" width={275} height={220}/>
          </Grid>
          <Grid item xs={2} sm={2} md={2} >
              <Skeleton variant="rectangular" width={275} height={220}/>
          </Grid>
          <Grid item xs={2} sm={2} md={2} >
              <Skeleton variant="rectangular" width={275} height={220}/>
          </Grid>
          <Grid item xs={2} sm={2} md={2} >
              <Skeleton variant="rectangular" width={275} height={220}/>
          </Grid>
      </>
  )
}

export default CardSkeleton