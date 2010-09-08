/*
 * Ext JS Library 2.2
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

// some data used in the examples
Ext.namespace('Ext.exampledata');

Ext.exampledata.languages = [
	['af', 'Afrikaans', 'ISO-8859-2'],
	['bg', 'Bulgarian', 'utf-8'],
	['ca', 'Catalonian', 'ascii'],
	['hr', 'Croatian', 'utf-8'],
	['cs', 'Czech', 'utf-8'],
	['da', 'Danish', 'utf-8'],
	['nl', 'Dutch', 'ascii'],
	['en', 'English', 'ascii'],
	['en_UK', 'English (UK)', 'ascii'],
	['fa', 'Farsi (Persian)', 'utf-8'],
	['fr_CA', 'France (Canadian)', 'UTF-8'],
	['fr', 'France (France)', 'UTF-8'],
	['de', 'German', 'utf-8'],
	['el_GR', 'Greek', 'utf-8'],
	['gr', 'Greek (Old Version)', 'utf-8'],
	['he', 'Hebrew', 'windows-1255'],
	['hu', 'Hungarian', 'utf-8'],
	['id', 'Indonesian', 'ascii'],
	['it', 'Italian', 'ascii'],
	['ja', 'Japan', 'utf-8'],
	['ko', 'Korean', 'utf-8'],
	['lv', 'Latvian', 'utf-8'],
	['lt', 'Lithuanian', 'utf-8'],
	['mk', 'Macedonia', 'utf-8'],
	['no', 'Norwegian', 'utf-8'],
	['pl', 'Polish', 'utf-8'],
	['pt_BR', 'Portuguese/Brazil', 'ascii'],
	['ro', 'Romanian', 'utf-8'],
	['ru', 'Russian', 'UTF-8'],
	['sr_RS', 'Serbian Cyrillic', 'UTF-8'],
	['sr', 'Serbian Latin', 'utf-8'],
	['zh_CN', 'Simplified_Chinese', 'utf-8'],
	['sk', 'Slovak', 'utf-8'],
	['sl', 'Slovenian', 'utf-8'],
	['es', 'Spanish/Latin American', 'utf-8'],
	['sv_SE', 'Swedish', 'utf-8'],
	['th', 'Thailand', 'utf-8'],
	['zh_TW', 'Traditional_Chinese', 'UTF-8'],
	['tr', 'Turkish', 'utf-8'],
	['ukr', 'Ukrainian', 'UTF-8'],
	['vn', 'Vietnamese', 'UTF-8']
];

function _T(f, w) { 
	try{
		if(eval(f+'[0].'+w)== undefined) {alert('[Wording undefined] Get language files.'+'\n\nKey: \''+f+'\''+'\nWording: \''+w+'\'');}
		else {return eval(f+'[0].'+w);}
	}catch(e){
		alert('[Key undefined] Get language files.'+'\n\nKey: \''+f+'\''+'\nWording: \''+w+'\'');
	}
}