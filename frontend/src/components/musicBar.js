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
import useSWR from 'swr'



export default function MusicBar() { // work on the music bar; 
    // music title, singer and lryrics, image
    // then work on to fetch from music box api; 
    const [loading, setLoading] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
     <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Heartbeats"
        subheader="José González"
         />
         
      <CardMedia
        component="img"
        height="194"
        image="/static/images/singer.jpg"
        // alt="first singer demo"
         />
         
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            One night to be confused <br/>
            One night to speed up truth <br/>
            We had a promise, babe <br/>
            Four hands and then away <br/>
            Both under influence <br/>
            We had divine sense <br/>
            To know what to say <br/>
            Mind is a razor blade <br/>
            To call for hands of above <br/>
            To lean on <br/>
            Wouldn't be good enough <br/>
            For me, no <br/>
            One night of magic rush <br/>
            The start a simple touch <br/>
            One night to push and scream <br/>
            And then relief <br/>
            Ten days of perfect hues <br/>
            The colors red and blue <br/>
            We had a promise, babe <br/>
            We were in love <br/>
            To call for hands of above <br/>
            To lean on <br/>
            Wouldn't be good enough <br/>
            For me, no <br/>
            To call for hands of above <br/>
            To lean on <br/>
            Wouldn't be good enough <br/>
            And you <br/>
            You knew the hand of the devil <br/>
            And you <br/>
            Kept us awake with wolves teeth <br/>
            Sharing different heartbeats <br/>
            In one night <br/>
            To call for hands of above <br/>
            To lean on <br/>
            Wouldn't be good enough <br/>
            For me, no <br/>
            To call for hands of above <br/>
            To lean on <br/>
            Wouldn't be good enough <br/>
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
  );

}