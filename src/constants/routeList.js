// -------------------- App Route List -----------------------
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/general.js";

export const APP_ROUTES = [
	{ id:1, name:'app.home', title:'Home', sub:[] },
	{ id:2, name:'app.properties', title:'Properties', sub:[] },
	{ id:3, name:'app.property', title:'Property', sub:[] },
	{ id:2, name:'app.realtor', title:'Realtor', sub:[] },
];



// ------------------ Dashboard Route List --------------------
export const DASHBOARD_ROUTES = [
	{ 
		id:1,
		title:'Board',
		name:'dashboard.crm',
		icon:'icon-layout-dashboard',
		sub:[
			{id:1, title:'Activities', name:'dashboard.crm'},
			{id:2, title:'Deals', name:'dashboard.crm-deals'},
			{id:3, title:'Leads', name:'dashboard.crm-leads'},
			{id:4, title:'Enquiries', name:'dashboard.crm-enquiries'},
		] 
	},
	{ id:2, title:'Insight', name:'dashboard.insight', icon:'icon-analytics-bars', sub:[] },
	{ 
		id:3,
		title:'My Properties',
		name:'dashboard.my-properties',
		icon:'icon-building-cloudy',
		sub:[
			{id:1, title:'All', name:'dashboard.my-properties'},
			{id:2, title:'Published', name:'dashboard.my-properties.published'},
			{id:3, title:'Pending', name:'dashboard.my-properties.pending'},
			{id:4, title:'Expired', name:'dashboard.my-properties.expired'},
			{id:5, title:'Draft', name:'dashboard.my-properties.draft'},
			{id:6, title:'On Hold', name:'dashboard.my-properties.hold'},
			{id:7, title:'Disapproved', name:'dashboard.my-properties.disapproved'},
		] 
	},
	{ id:4, title:TITLE_CREATE_UPDATE_LISTING, name:'dashboard.create-listing.step-1', icon:'icon-add-circle', sub:[] },
	{ id:5, title:'Favorites', name:'dashboard.favorite-properties', icon:'icon-love-it', sub:[] },
	{ id:6, title:'Saved Searches', name:'dashboard.saved-searches', icon:'icon-search', sub:[] },
	{ id:7, title:'Invoices', name:'dashboard.invoices', icon:'icon-accounting-document', sub:[] },
	{ id:8, title:'Messages', name:'dashboard.messages', icon:'icon-messages-bubble', sub:[] },
	{ id:9, title:'My Profile', name:'dashboard.my-profile', icon:'icon-single-neutral-circle', sub:[] },
	{ 
		id:10,
		title:'Admin',
		name:'dashboard.admin',
		icon:'icon-building-cloudy',
		sub:[
			{id:1, title:'Post Type', name:'dashboard.admin.post_type'},
			{id:2, title:'Taxonomies', name:'dashboard.admin.taxonomies'},
			{id:3, title:'Permalinks', name:'dashboard.admin.permalinks'},
			{id:4, title:'Currency Switcher', name:'dashboard.admin.currency_switcher'},
			{id:5, title:'Currencies', name:'dashboard.admin.currencies'},
			{id:6, title:'Documentation', name:'dashboard.admin.documentation'},
			{id:7, title:'Feedback', name:'dashboard.admin.feedback'},
		] 
	},
	{ 
		id:11,
		title:'Media',
		name:'dashboard.media',
		icon:'icon-building-cloudy',
		sub:[
			{id:1, title:'Library', name:'dashboard.media'},
			{id:2, title:'Add New', name:'dashboard.media.addnew'},
			
		] 
	},
	{ 
		id:12,
		title:'File Manager',
		name:'dashboard.file-manager',
		icon:'icon-building-cloudy',
		sub:[
			{id:1, title:'Settings', name:'dashboard.file-manager.setting'},
			
		] 
	}
];
