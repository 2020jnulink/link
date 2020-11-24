import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Scooter_Create.css";
import Dropzone from "react-dropzone";
import classNames from "classnames";

const imageMaxSize = 10000000; //bytes
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
  return item.trim();
});
class Scooter_Create extends React.Component {
    state = {
      title: "", // eslint-disable-line no-unused-vars
      manufacturer: "", // eslint-disable-line no-unused-vars
      price: 20, // eslint-disable-line no-unused-vars
      walletid: "", // eslint-disable-line no-unused-vars
    };
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    constructor(props) {
      super(props);
      this.state = {
        imgSrc: null,
        showPopup: false,
      };
    }
    verifyFile = (files) => {
      if (files && files.length > 0) {
        const currentFile = files[0];
        const currentFileType = currentFile.type;
        const currentFileSize = currentFile.size;
        if (currentFileSize > imageMaxSize) {
          alert(
            "이 파일은 허용되지 않습니다." +
              imageMaxSize +
              "bytes이하의 파일을 업로드해주세요."
          );
          return false;
        }
        if (!acceptedFileTypesArray.includes(currentFileType)) {
          alert("이미지 파일만 업로드 가능합니다.");
          return false;
        }
        return true;
      }
    };
    handleOnDrop = (files, rejectedFiles) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        this.verifyFile(rejectedFiles);
      }
      if (files && files.length > 0) {
        const isVerified = this.verifyFile(files);
        if (isVerified) {
          //imageBase64Data
          const currentFile = files[0];
          const MyFileItemReader = new FileReader();
          MyFileItemReader.addEventListener(
            "load",
            () => {
              console.log(MyFileItemReader.result);
              this.setState({
                imgSrc: MyFileItemReader.result,
              });
            },
            false
          );
          MyFileItemReader.readAsDataURL(currentFile);
        }
      }
    };
  render() {
    const { imgSrc } = this.state;
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="main">
            <div className="main_title">
              <div className="main_title__text">Create Scooter</div>
            </div>
            <div className="create_main">
            {imgSrc !== null ? (
              <img id="create_img" src={imgSrc} />
            ) : (
            <Dropzone
              onDrop={this.handleOnDrop}
              accept={acceptedFileTypes}
              className="drop_zone"
            >
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div
                    {...getRootProps()}
                    className={classNames("dropzone", {
                      "dropzone--isActive": isDragActive,
                    })}
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop files here...</p>
                    ) : (
                      <p>
                        파일을 드래그 하거나, 클릭하여 파일을
                        선택하세요.
                      </p>
                    )}
                  </div>
                );
              }}
            </Dropzone>
            )}
              <div className="create_main__que">
                <div className="create_que__name">Title</div>
                <div className="create_que__id">Manufacturer</div>
                <div className="create_que__password">Price</div>
                <div className="create_que__resident">
                  WalletID
                </div>
              </div>
              <div className="create_main__var">
                <div className="create_var__var">:</div>
                <div className="create_var__var">:</div>
                <div className="create_var__var">:</div>
                <div className="create_var__var">:</div>
              </div>
              <div className="create_main__input">
                <input
                  className="create_input__name"
                  onChange={this.handleChange}
                  name="title"
                  value={this.state.title} // eslint-disable-line no-unused-vars
                />
                <input
                  className="create_input__id"
                  onChange={this.handleChange}
                  name="manufacturer"
                  value={this.state.manufacturer} // eslint-disable-line no-unused-vars
                />
                <input
                  className="create_input__password"
                  onChange={this.handleChange}
                  name="price"
                  value={this.state.price} // eslint-disable-line no-unused-vars
                />
                <input
                  className="create_input__resident"
                  onChange={this.handleChange}
                  name="walletid"
                  value={this.state.walletid} // eslint-disable-line no-unused-vars
                />
              </div>
              
            </div>
            <div className="create_complete">
              <Link className="create_complete__btn" to="/seller">
                Confirm
              </Link>
            </div>
          </div>
        </body>
        <div className="nav_var">
          <Navigation_var />
        </div>
      </div>
    );
  }
}

export default Scooter_Create;
