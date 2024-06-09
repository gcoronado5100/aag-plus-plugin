import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import block from "./block";
import "./main.css";

registerBlockType(block.name, {
  icon: block.icon,
  edit({ attributes, setAttributes }) {
    const { title, content, bgImage } = attributes;
    const blockProps = useBlockProps();
    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Card Service")}>
            <TextControl
              label={__("Title")}
              value={title}
              onChange={(title) => setAttributes({ title })}
            />
            <TextControl
              label={__("Content")}
              value={content}
              onChange={(content) => setAttributes({ content })}
            />
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          <div className='card-overlay'>
            <h3>{title}</h3>
            <h4>{content}</h4>
          </div>
        </div>
      </>
    );
  },
  save({ attributes }) {},
});
