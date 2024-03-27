import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  const [addData, setVal] = useState('');
  const [addedData, showData] = useState(false);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
  };

  return (
    <div className="App">
      <h2>Using CKEditor&nbsp;5 build in React</h2>
      <button onClick={() => showData(!addedData)}>
        {addedData ? 'Hide Data' : 'Show Data'}
      </button>
      <CKEditor
        editor={ClassicEditor}
        data={addData}
        onChange={handleChange}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
        config={{
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'link',
            'undo',
            'redo',
          ],
        }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: addedData ? addData : '' }}
      ></div>
    </div>
  );
}

export default App;