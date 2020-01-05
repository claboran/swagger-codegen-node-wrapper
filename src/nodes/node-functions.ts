import * as builder from "xmlbuilder";
import {XMLElement} from "xmlbuilder";
import {ElementData} from "./node-types";

export const openSchemaRoot = (): XMLElement => builder.create(
    'xs:schema',
    { encoding: 'utf-8' }
    ).att('xmlns:xs', 'http://www.w3.org/2001/XMLSchema');

export const closeSchemaToString = (rootElem: XMLElement): string => rootElem.end({pretty: true});

export const createElementNode = (parent: XMLElement, elemData: ElementData): XMLElement => parent
    .ele('xs:element', {
        name: elemData.name,
        type: elemData.elemType !== 'xs:complexType' ? elemData.elemType : undefined,
        ref: elemData.elemType === 'xs:complexType' ? elemData.ref : undefined,
        minOccurs: elemData.minOccurs !== undefined ? elemData.minOccurs : undefined,
        maxOccurs: elemData.maxOccurs ? elemData.maxOccurs : undefined
    }).up();
