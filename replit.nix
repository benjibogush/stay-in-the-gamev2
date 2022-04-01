# { pkgs }: {
# 	deps = with pkgs; [
# 		nodejs-16_x
# 		nodePackages.typescript-language-server
# 	];
# }

{ pkgs }: {
	deps = with pkgs; [
		pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.replitPackages.jest
        pkgs.nodePackages.npm
	];
}
