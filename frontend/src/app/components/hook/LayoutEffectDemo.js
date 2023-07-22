"use client";
import { useState, useRef } from 'react';
import Tooltip from './Tooltip.js';

export function ButtonWithTooltip({ tooltipContent, ...rest }) {
    const [targetRect, setTargetRect] = useState(null);
    const buttonRef = useRef(null);
    return (
        <>
            <button
                {...rest}
                ref={buttonRef}
                onPointerEnter={() => {
                    console.log('onPointer event');
                    const rect = buttonRef.current.getBoundingClientRect();
                    setTargetRect({
                        left: rect.left,
                        top: rect.top,
                        right: rect.right,
                        bottom: rect.bottom,
                    });
                }}
                onPointerLeave={() => {
                    console.log('onPointer leave');
                    setTargetRect(null);
                }}
            />
            {targetRect !== null && (
                <Tooltip targetRect={targetRect}>
                    {tooltipContent}
                </Tooltip>
            )
            }
        </>
    );
}

export default function LayoutEffectDemo()
{
    return (
        <div>
            <ButtonWithTooltip
                tooltipContent={
                    <div style={{color:'white'}}>
                        This tooltip does not fit above the button.
                        <br />
                        This is why it's displayed below instead!
                    </div>
                }
                className = "btn btn-primary"
            >
                Hover over me (tooltip above)
            </ButtonWithTooltip>
            <div style={{ height: 50 }} />
            <ButtonWithTooltip
                tooltipContent={
                    <div>This tooltip fits above the button</div>
                }
            >
                Hover over me (tooltip below)
            </ButtonWithTooltip>
            <div style={{ height: 50 }} />
            <ButtonWithTooltip
                tooltipContent={
                    <div>This tooltip fits above the button</div>
                }
            >
                Hover over me (tooltip below)
            </ButtonWithTooltip>
        </div>
    );
}