import React from 'react'
import { Form } from 'react-bootstrap'
import { BsUpload } from 'react-icons/bs'

export const FileBase = props => {
  const handleChange = e => {
    let files = e.target.files
    let reader = new FileReader()
    let allFiles = []
    for (let i = 0; i < files.length; i++) {
      let file = files[i]
      reader.readAsDataURL(file)
      reader.onload = () => {
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        }
        allFiles.push(fileInfo)
        if (allFiles.length === files.length) {
          if (props.multiple) props.callback(allFiles)
          else props.callback(allFiles[0])
        }
      }
    }
  }
  return (
    <Form>
      <label htmlFor='file' className={props.className}>
        <BsUpload size={props.size} />
        <span>Выберите файл</span>
      </label>
      <input
        id='file'
        type='file'
        onChange={e => handleChange(e)}
        multiple={props.multiple}
        accept={props.accept}
        hidden
      />
    </Form>
  )
}
