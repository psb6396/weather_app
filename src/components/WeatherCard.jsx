import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'

export default function WeatherCard({ forecasts_list, name }) {
   var hour = null
   return (
      <>
         <h1>{name}의 5일치 날씨(12시기준)</h1>
         <Grid class="container" container spacing={2.5}>
            {forecasts_list.map((forecast) => {
               hour = parseInt(forecast.dt_txt.split(' ')[1].split(':')[0], 10)
               if (hour === 15) {
                  return (
                     <Card sx={{ maxWidth: 345 }}>
                        {forecast.weather.map((element) => (
                           <p>
                              <CardMedia sx={{ height: 140 }} image={element.icon ? `https://openweathermap.org/img/wn/${element.icon}@2x.png` : <p>이미지가 없음</p>} title="....." />
                           </p>
                        ))}
                        <CardContent>
                           <Typography gutterBottom variant="body2" component="div">
                              {forecast.weather.map((element) => (
                                 <p>{element.description}</p>
                              ))}
                           </Typography>
                           <Typography gutterBottom variant="h5" component="div">
                              {forecast.dt_txt}
                           </Typography>

                           <Typography variant="body2" sx={{ color: 'text.secondary' }}></Typography>
                        </CardContent>
                     </Card>
                  )
               }
            })}
         </Grid>
      </>
   )
}
