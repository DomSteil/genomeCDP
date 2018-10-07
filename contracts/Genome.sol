pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract GenomeToken is ERC721Token, Ownable {
    string public constant name = "GenomeToken";
    string public constant symbol = "GCDP";

    struct Genome {
        
        uint256 owner;
        uint256 genes;

    }

    Genome[] public genomes;

    function getGenome(uint256 _genomeId) external view returns (uint256 owner, uint256 genomeId, uint256 genes) {
        Genome storage _gene = genomes[_genomeId];

        owner = uint256(_gene.owner);
        genes = uint256(_gene.genes);

    }

        function createGenome(uint256 _owner, uint256 _genes) internal returns (uint){
        Genome memory _genome = Genome({ owner: _owner, genes: _genes});
        uint256 _genomeId = genomes.push(_genome) - 1;

        createGenome(_owner, _genomeId);
    }

}