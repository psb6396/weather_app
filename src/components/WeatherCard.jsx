import * as React from 'react'
import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'

export default function WeatherCard({ forecasts_list }) {
   return (
      <Grid container spacing={2.5}>
         {forecasts_list.map((forecast) => (
            <Card sx={{ maxWidth: 345 }}>
               {forecast.weather.map((element) => (
                  <p>
                     {/* {element.description} */}
                     {/* <CardMedia sx={{ height: 140 }} image={element.icon ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : '/images/poster.png'} title="....." /> */}
                     <CardMedia sx={{ height: 140 }} image={element.icon ? `https://openweathermap.org/img/wn/${element.icon}@2x.png` : <p>이미지가 없음</p>} title="....." />
                  </p>
               ))}
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     {forecast.dt_txt}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                     {forecast.weather.map((element) => (
                        <p>{element.description}</p>
                     ))}
                  </Typography>
                  {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     asdfsadf
                  </Typography> */}
               </CardContent>
            </Card>
         ))}
      </Grid>
   )
}
