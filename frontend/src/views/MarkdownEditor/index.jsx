import React, {useState} from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import ReactMarkdown from 'react-markdown'
import { makeStyles } from "@material-ui/styles/";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding:'15px',
        height:'100vh',
        '& .section': {
            display:'flex',
            flexDirection: 'column',
            width: '100%',
            height:'100%',
            marginRight: '15px',
            '& .MuiCard-root, .MuiCardContent-root': {
                height: '100%',
                padding:0,
                '& .mdInputArea': {
                    background: 'url(http://i.imgur.com/2cOaJ.png)',
                    backgroundAttachment: 'local',
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: 35,
                    paddingTop: 10,
                    borderColor: '#ccc',
                    font: 'Roboto',
                    resize: 'none',
                    height: '100%',
                    width:'100%',
                    border: 'none',
                }
            },
            '& .previewArea': {
                overflowY:'auto'
            }
        }
    },
    
})

const MarkdownEditor = () => {
    const classes = useStyles()
    const [text, setText] = useState('')
    const handleChangeTextarea = (event) => {
        setText(event.target.value);
    }
    return (
        <div className={classes.container}>
            <div className="section">
                <Typography variant="h3" gutterBottom>Markdown</Typography>
                <Card className={classes.card}> 
                    <CardContent>
                        <textarea className="mdInputArea" onChange={handleChangeTextarea} />
                    </CardContent>
                </Card>
            </div>
            <div className="section"> 
                <Typography variant="h3" gutterBottom>Preview</Typography>
                <Card>
                    <CardContent className="previewArea markdown-body">
                        <ReactMarkdown source={text} />
                    </CardContent>
                </Card> 
            </div> 
                
        </div>
        
    )

}

export default MarkdownEditor