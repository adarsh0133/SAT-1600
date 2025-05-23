import React, { useState, useEffect } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import Component7 from './Component7';
import Component8 from './Component8';
import Component9 from './Component9';
import Component10 from './Component10';
import Component11 from './Component11';
import Component12 from './Component12';
import Component13 from './Component13';
import Component14 from './Component14';
import Component15 from './Component15';

export default function Index() {
  const [Component, setComponent] = useState('component1');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem('component');
      if (saved) setComponent(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('component', Component);
    }
  }, [Component]);

  return (
    <div>
      {Component === 'component1' && <Component1 Component={Component} setComponent={setComponent} />}
      {Component === 'component2' && <Component2 Component={Component} setComponent={setComponent} />}
      {Component === 'component3' && <Component3 Component={Component} setComponent={setComponent} />}
      {Component === 'component4' && <Component4 Component={Component} setComponent={setComponent} />}
      {Component === 'component5' && <Component5 Component={Component} setComponent={setComponent} />}
      {Component === 'component6' && <Component6 Component={Component} setComponent={setComponent} />}
      {Component === 'component7' && <Component7 Component={Component} setComponent={setComponent} />}
      {Component === 'component8' && <Component8 Component={Component} setComponent={setComponent} />}
      {Component === 'component9' && <Component9 Component={Component} setComponent={setComponent} />}
      {Component === 'component10' && <Component10 Component={Component} setComponent={setComponent} />}
      {Component === 'component11' && <Component11 Component={Component} setComponent={setComponent} />}
      {Component === 'component12' && <Component12 Component={Component} setComponent={setComponent} />}
      {Component === 'component13' && <Component13 Component={Component} setComponent={setComponent} />}
      {Component === 'component14' && <Component14 Component={Component} setComponent={setComponent} />}
      {Component === 'component15' && <Component15 Component={Component} setComponent={setComponent} />}
    </div>
  );
}