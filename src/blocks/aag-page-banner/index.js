import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  ToggleControl,
  SelectControl,
  AnglePickerControl,
} from "@wordpress/components";
import block from "./block.json";
import "./main.css";
import Airplane1 from "./Airplane-1.png";
import Airplane2 from "./Airplane-2.png";
import Airplane3 from "./Airplane-3.png";
import Graph from "./graph.png";
import styled from "styled-components";

registerBlockType(block.name, {
  icon: block.icon,
  edit({ attributes, setAttributes }) {
    const { title, subtitle, showSubtitle, isCentered, showIcon, icon } =
      attributes;
    return (
      <>
        <InspectorControls>
          <PanelBody title='Page Banner'>
            <TextControl
              label='Title'
              value={title}
              onChange={(title) => setAttributes({ title })}
            />
            <ToggleControl
              label='Hide Subtitle'
              checked={showSubtitle}
              onChange={(showSubtitle) => setAttributes({ showSubtitle })}
            />
            {!showSubtitle && (
              <TextControl
                label='Subtitle'
                value={subtitle}
                onChange={(subtitle) => setAttributes({ subtitle })}
              />
            )}
            <ToggleControl
              label='Centered'
              checked={isCentered}
              onChange={(isCentered) => setAttributes({ isCentered })}
            />
            <ToggleControl
              label='Show Airplane Icon'
              checked={showIcon}
              onChange={(showIcon) => setAttributes({ showIcon })}
            />
            {showIcon && (
              <>
                <SelectControl
                  label='Icon'
                  value={icon}
                  options={[
                    { label: "None", value: "" },
                    { label: "Icon 1", value: "1" },
                    { label: "Icon 2", value: "2" },
                    { label: "Icon 3", value: "3" },
                  ]}
                  onChange={(icon) => setAttributes({ icon })}
                />
              </>
            )}
          </PanelBody>
        </InspectorControls>

        <div className='aag-page-banner'>
          <img src={Graph} alt='Turbine Graph' className='aag-turbine-icon' />
          <img src={Graph} alt='Turbine Graph' className='aag-turbine-right' />

          {showIcon && icon == 1 && (
            <img src={Airplane1} alt='Airplane 1' className='airplane' />
          )}
          {showIcon && icon == 2 && (
            <img src={Airplane2} alt='Airplane 2' className='airplane' />
          )}
          {showIcon && icon == 3 && (
            <img src={Airplane3} alt='Airplane 3' className='airplane' />
          )}

          <div className='banner-overlay'>
            <div
              className={`container banner__container ${
                isCentered ? "centered__banner" : ""
              }`}
            >
              <h2>{title}</h2>
              {/* {showSubtitle && <h4>{subtitle}</h4>} */}
              {!showSubtitle ? <h4>{subtitle}</h4> : ""}
            </div>
          </div>
        </div>
      </>
    );
  },
  save({
    attributes: { title, subtitle, showSubtitle, isCentered, showIcon, icon },
  }) {
    return (
      <div className='aag-page-banner'>
        <img src={Graph} alt='Turbine Graph' className='aag-turbine-icon' />
        <img src={Graph} alt='Turbine Graph' className='aag-turbine-right' />

        {showIcon && icon == 1 && (
          <img src={Airplane1} alt='Airplane 1' className='airplane' />
        )}
        {showIcon && icon == 2 && (
          <img src={Airplane2} alt='Airplane 2' className='airplane' />
        )}
        {showIcon && icon == 3 && (
          <img src={Airplane3} alt='Airplane 3' className='airplane' />
        )}

        <div className='banner-overlay'>
          <div
            className={`container banner__container ${
              isCentered ? "centered__banner" : ""
            }`}
          >
            <h2>{title}</h2>
            {!showSubtitle ? <h4>{subtitle}</h4> : ""}
          </div>
        </div>
      </div>
    );
  },
});
