
export const useCovalent = (options) => {

  const getNFTTokenIdsForContract = (ca) => {
    return fetch(`/api/getNFTTokenIdsForContract?contractAddress=${ca}`).then(res => res.json());
  }

  const getNFTTransactionsForContract = (ca, tokenId) => {
    return fetch(`/api/getNFTTransactionsForContract?contractAddress=${ca}&tokenId=${tokenId}`).then(res => res.json());
  }

  const getNFTExternalMetadataForContract = (ca, tokenId) => {
    return fetch(`/api/getNFTExternalMetadataForContract?contractAddress=${ca}&tokenId=${tokenId}`).then(res => res.json());
  }

  return { getNFTTokenIdsForContract, getNFTTransactionsForContract, getNFTExternalMetadataForContract };
};
