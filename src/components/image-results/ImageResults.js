import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: "",
  };

  handleOpen = (img) => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { images } = this.props;
    const { open, currentImg } = this.state;

    return (
      <div>
        <Grid container spacing={2}>
          {images &&
            images.map((img) => (
              <Grid item xs={12} sm={6} md={4} key={img.id}>
                <Typography variant="subtitle1" gutterBottom>
                  {img.tags} by <strong>{img.user}</strong>
                </Typography>
                <img
                  src={img.largeImageURL}
                  alt={img.tags}
                  style={{ width: "100%" }}
                />
                <IconButton
                  onClick={() => this.handleOpen(img.largeImageURL)}
                  color="primary"
                  aria-label="zoom"
                >
                  <ZoomInIcon />
                </IconButton>
              </Grid>
            ))}
        </Grid>

        <Dialog open={open} onClose={this.handleClose}>
          <DialogContent>
            <img src={currentImg} alt="Zoomed" style={{ width: "100%" }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
