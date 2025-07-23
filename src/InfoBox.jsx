import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1641970304221-48dc92c14daf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let HOT_URL = "https://images.unsplash.com/photo-1708270753160-a93f6932d189?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let COLD_URL = "https://images.unsplash.com/photo-1701852713630-ebcce1bd43fa?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let RAIN_URL = "https://images.unsplash.com/photo-1691440732313-410d1865065f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return(
        <div className="InfoBox">
         <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
           sx={{ height: 140 }}
           image={info.humidity > 86 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
           />
         <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 86 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min temp = {info.tempMin}&deg;C</p>
            <p>Max temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
          </Typography>
         </CardContent>
         </Card>
         </div>
        </div>
    );
}