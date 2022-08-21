import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { posts } from './model';

export default function RowAndColumnSpacing() {
    return (
      <Box sx={{ width: '100%',  }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {posts.map((post, key) =>(
                <Grid key={key} item xs={12} sm={6} md={4}>
                    <Card>
                    <CardMedia
                        style={{ paddingTop: "56%" }}
                        image={post.image_url}
                    />
                    </Card>
                </Grid>
            ))}
        </Grid>
      </Box>
    );
  }
