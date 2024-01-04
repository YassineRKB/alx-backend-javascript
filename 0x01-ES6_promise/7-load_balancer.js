#!/usr/bin/node
export default (chinaDownload, USDownload) => Promise.race([chinaDownload, USDownload]);
