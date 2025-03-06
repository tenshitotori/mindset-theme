/**
* Imports.
*/
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl, PanelColorSettings } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { SwiperInit } from './swiper-init';

/**
* Export.
*/
export default function Edit( { attributes, setAttributes } ) {
    const { navigation, pagination, arrowColor } = attributes;

    // Define custom styles using the arrowColor attribute
    const blockStyles = { '--testimonial-arrow-color': arrowColor };

    const swiper = SwiperInit( '.swiper', { navigation, pagination } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Settings', 'testimonial-slider' ) }>
                    <PanelRow>
                        <ToggleControl
                            label={ __( 'Navigation', 'testimonial-slider' ) }
                            checked={ navigation }
                            onChange={ ( value ) => setAttributes( { navigation: value } ) }
                            help={ __( 'Navigation will display arrows so users can navigate forward and backward.', 'testimonial-slider' ) }
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={ __( 'Pagination', 'testimonial-slider' ) }
                            checked={ pagination }
                            onChange={ ( value ) => setAttributes( { pagination: value } ) }
                            help={ __( 'Pagination will display dots so users can navigate to any slide.', 'testimonial-slider' ) }
                        />
                    </PanelRow>
                </PanelBody>

                <PanelColorSettings
                    title={ __( 'Arrow Color', 'testimonial-slider' ) }
                    colorSettings={[
                        {
                            label: __( 'Arrow Color', 'testimonial-slider' ),
                            value: arrowColor,
                            onChange: ( value ) => setAttributes( { arrowColor: value } ),
                        },
                    ]}
                />
            </InspectorControls>

            <div { ...useBlockProps({ style: blockStyles }) }>
                <ServerSideRender block="mindset-blocks/testimonial-slider" attributes={ attributes } />
            </div>
        </>
    );
}
