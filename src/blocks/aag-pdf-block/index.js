import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
  PanelBody,
  Button,
  FormFileUpload,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import block from "./block.json";
import "./main.css";
import CertificateIcon from "./img/Certificate-Icon.png";

registerBlockType(block.name, {
  icon: block.icon,
  edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
      className: "certificate__block",
    });
    const [url, setUrl] = useState(null);
    const {
      title,
      pdfUrl,
      slug,
      pdfName,
      pdfDescription,
      actionText,
      onNewTab,
    } = attributes;

    const onSelectPDF = (media) => {
      let newUrl = null;
      const fileData = media.target.files[0];
      console.log(fileData);

      //   console.log(media.target.files[0]);

      apiFetch({
        path: "wp/v2/media",
        method: "POST",
        headers: {
          "Content-Disposition":
            "attachment; filename=" + media.target.files[0].name,
        },
        body: fileData,
      })
        .then((response) => {
          newUrl = response.source_url;
          setAttributes({
            pdfUrl: newUrl,
            pdfName: media.target.files[0].name,
            pdfDescription: media.target.files[0].description,
            slug: media.target.files[0].name,
          });
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
    return (
      <>
        <InspectorControls>
          <PanelBody title={__("PDF Settings")} initialOpen={true}>
            <TextControl
              label={__("Title")}
              value={title}
              onChange={(title) => setAttributes({ title })}
            />

            <FormFileUpload accept='application/pdf' onChange={onSelectPDF}>
              {pdfName === "" ? __("Upload PDF") : __("Replace PDF")}
            </FormFileUpload>

            <TextControl
              label={__("PDF URL")}
              value={pdfUrl}
              onChange={(pdfUrl) => setAttributes({ pdfUrl })}
            />

            <ToggleControl
              label={__("Open in new tab")}
              checked={onNewTab}
              onChange={(onNewTab) => setAttributes({ onNewTab })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <img src={CertificateIcon} alt='Certificate Icon' />
          <h3>{title}</h3>
          {onNewTab ? (
            <a href={pdfUrl} target='_blank' rel='noreferrer noopener'>
              <button>{actionText}</button>
            </a>
          ) : (
            <a href={pdfUrl} download={slug}>
              <button>{actionText}</button>
            </a>
          )}
        </div>
      </>
    );
  },
  save({ attributes }) {
    const blockProps = useBlockProps.save({
      className: "certificate__block",
    });
    const { title, pdfUrl, slug, actionText, onNewTab } = attributes;
    return (
      <div {...blockProps}>
        <img src={CertificateIcon} alt='Certificate Icon' />
        <h3>{title}</h3>
        {onNewTab ? (
          <a href={pdfUrl} target='_blank' rel='noreferrer noopener'>
            <button>{actionText}</button>
          </a>
        ) : (
          <a href={pdfUrl} download={slug}>
            <button>{actionText}</button>
          </a>
        )}
      </div>
    );
  },
});
