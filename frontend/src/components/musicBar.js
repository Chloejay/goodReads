import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import useSWR from 'swr';

const fetcher= (url)=> fetch(url).then((res)=> res.json())


export default function MusicBar() { 
    const { data, error, isloading } = useSWR("/api/musicList", fetcher)
    console.log(data);
    
    return (
         <>
         {isloading ? (<>null</>) :
            <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title= {data[0].title}
                subheader={data[0].singer}
                />
                
            <CardMedia
                component="img"
                height="194"
                image="/static/images/singer.jpg"
                // alt="first singer demo"
                />
                
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {data[0].lyrics}
                </Typography>
                </CardContent>
                
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                {/* <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore> */}
            </CardActions>
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                        <Typography paragraph>Full Lyrics:
                            ""
                        </Typography>
                
                </CardContent>
            </Collapse> */}
                    </Card>
                    }
    </>
  );

}