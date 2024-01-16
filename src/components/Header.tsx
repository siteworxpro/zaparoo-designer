import { useFileDropperContext } from '../contexts/fileDropper';
import './Header.css';
import {
  type ReactEventHandler,
  lazy,
  startTransition,
  useCallback,
  useRef,
} from 'react';
import { ColorChanger } from './ColorChanger';
import { useAppDataContext } from '../contexts/appData';

const FilterDropdown = lazy(() => import('./FilterDropdown'));
const PdfButton = lazy(() => import('./PdfButton'));
const TemplateDropdown = lazy(() => import('./TemplateDropdown'));
const PrinterTemplateDropdown = lazy(() => import('./PrinterTemplateDropdown'));

export const Header = () => {
  const hiddenInput = useRef<HTMLInputElement>(null);

  const { files, setFiles, canvasArrayRef } = useFileDropperContext();
  const { originalColors, customColors, setCustomColors } = useAppDataContext();

  const openInputFile = useCallback(() => {
    hiddenInput.current && hiddenInput.current.click();
  }, []);

  const fileLoader = useCallback<ReactEventHandler<HTMLInputElement>>(
    (evt) => {
      const element = evt.currentTarget as HTMLInputElement;
      startTransition(() => {
        if (element.files) {
          setFiles([...files, ...element.files]);
        }
      });
    },
    [files, setFiles],
  );

  const hasFiles = !!files.length;

  return (
    <div className="topHeader">
      <input
        multiple
        ref={hiddenInput}
        type="file"
        onChange={fileLoader}
        style={{ display: 'none' }}
      />

      {hasFiles && (
        <ColorChanger
          setCustomColors={setCustomColors}
          customColors={customColors}
          originalColors={originalColors}
        />
      )}
      {hasFiles && <TemplateDropdown />}
      {false && <FilterDropdown canvasArrayRef={canvasArrayRef} />}
      <button onClick={openInputFile}>Add files</button>
      {hasFiles && <PrinterTemplateDropdown />}
      {hasFiles && <PdfButton canvasArrayRef={canvasArrayRef} />}
    </div>
  );
};
