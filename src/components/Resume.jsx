import React from 'react';
import { Document, Page } from 'react-pdf';
const resume = require('../static/daniel-resume.pdf');

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({
      numPages,
    })
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div className="resume">
        <div className="resume-container">
          <Document
            className="resume"
            file={resume}
            onLoadSuccess={this.onDocumentLoad}
            renderMode="svg"
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="page-number">
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      </div>
    )
  }
}

export default Resume;
